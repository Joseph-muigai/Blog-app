const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


// register
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:hashedPassword
        })
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})
// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(400).json("wrong credentials")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("wrong credentials")

        const {password, ...other}= user._doc
        res.status(200).json(other)

    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;