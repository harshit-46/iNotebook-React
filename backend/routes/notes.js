const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var fetchuser = require('../middleware/fetchuser');
const Note = require("../models/Note");

// ROUTE 1  : Get all the notes.
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error occured");
    }
});

// ROUTE 2  : Add a new notes.
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid Title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 8 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // This will return errors with the message if found
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        };
        const note = new Note({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();

        res.json(savedNote);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error occured");
    };
});

// ROUTE 3 : Update an existing data.
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be updated and upadte it.
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note not found");
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error occured");
    };
});

// ROUTE 4 : To delete an existing note.
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be deleted and delete it.
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note not found");
        }

        // Allow deletion only if user owns that note.
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted", note: note });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error occured");
    }
});

module.exports = router;