const express = require('express');
const User = require('../models/user');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a User No login required

router.post('/createuser', [
    body('name', 'Enter a valid Name:').isLength({ min: 3 }),
    body('email', 'Enter a valid Email:').isEmail(),
    body('password', 'Enter a valid Password:').isLength({ min: 8 })
], async (req, res) => {
    const errors = validationResult(req); // This will return errors with the message if found
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };

    // Check whether the user with the same email exists already or not.
    try {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).json({ error: 'Sorry a user with this email already exists' });
        };

        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        })

        res.json({ "message": "Data saved successfully" });
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
});

module.exports = router;