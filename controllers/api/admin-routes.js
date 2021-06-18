// Routes for admin
const router = require('express').Router();
const Admin = require("../../models/Admin");

// Routes for admin

// Creates new admin user 
// /api/admin
router.post('/', async (req, res) => {
    try {
        const d = await Admin.create({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        })
        req.session.save(() => { // Saves session variables to use for templates
            req.session.loggedIn = true;
            req.session.admin = true;
            req.session.student = false;
            res.status(200).json({message: "Admin successfully created!"});
        })
    } catch (error) {
        res.status(500).json(error);
    }
})

// Logs in the admin
// /api/admin/login
router.post('/login', async (req, res) => {
    try {
        const d = await Admin.findOne({
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
                req.session.admin = true;
                req.session.student = false;
                res.status(200).json({message: "Succesfully logged in!"});
            })
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// Log out admin
// /api/admin/logout
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
        res.status(500).json(error);
    }
})




module.exports = router;