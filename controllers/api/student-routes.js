const router = require('express').Router();
const Student = require("../../models/Student");

// Routes for student

// Creates new student user 
// /api/student
router.post('/', async (req, res) => {
    try {
        const d = await Student.create({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        })
        req.session.save(() => { // Saves session variables to use for templates
            req.session.loggedIn = true;
            req.session.admin = false;
            req.session.student = true;
            req.session.userID = d.id; // This ID variable will be used to create a course with this student ID
            req.session.userName = d.userName // Username needed for chat window
            res.status(200).json(d); 
        })
    } catch (error) {
        res.status(500).json(error);
    }
})

// Logs in the student
// /api/student/login
router.post('/login', async (req, res) => {
    try {
        const d = await Student.findOne({
            where: {
                userName: req.body.userName
            }
        })
        const validPassword = d.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(404).json({message: "Could not find these credentials."})
        } else {
            req.session.save(() => {
                req.session.loggedIn = true;
                req.session.admin = false;
                req.session.student = true;
                req.session.userID = d.id; 
                req.session.userName = d.userName 
                res.status(200).json(d);
            })
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// Log out student
// /api/student/logout
router.post('/logout', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end();
            })
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(500).json({message: "Something went wrong."});
    }
})




module.exports = router;