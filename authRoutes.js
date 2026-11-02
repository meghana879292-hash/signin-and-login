const express = require("express");
const router = express.Router();
const signup = require("../controller/authcontroller");
const validateSignup = require("../middleware/validationMiddleware");
router.post("/signup", validateSignup, signup);
module.exports = router;