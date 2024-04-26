const express = require('express');
const User = require('../models/user');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var JWT_SECRET = 'kdgsfksalfbhsk.fklf';
var fetchuser = require('../middleware/fetchuser');


// ROUTE 1 : Create a User No login required!

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
            return res.status(400).json({ error: 'User already exists' });
        };
        const salt = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        });
        const data = {
            user: {
                id: user.id
            }
        };

        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error occured");
    }
});

// ROUTE 2 : Authenticate a user ! No login required.
router.post('/login', [
    body('email', 'Enter a valid Email:').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    const errors = validationResult(req); // This will return errors with the message if found
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    };
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Please try to login with correct credentials' });
        };
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ errors: 'Please try to login with correct credentials' });
        };
        const data = {
            user: {
                id: user.id
            }
        };

        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error occured");
    };
});


// ROUTE 3 : Get logged in user details.
router.post('/getuser', fetchuser,  async (req, res) => {
    try {
        userid = req.user.id;
        const user = await User.findById(userid).select("-password");
        res.send(user);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error occured");
    };
});

module.exports = router;