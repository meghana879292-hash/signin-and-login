const User = require("../modules/user");
const bcrypt = require("bcryptjs");
const signup = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      gender,
      mobile,
      address
    } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        error: "Email already registered"
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      gender,
      mobile,
      address
    });
    res.status(201).json({
      message: "Signup successful",
      user: {
        username: user.username,
        email: user.email,
        gender: user.gender,
        mobile: user.mobile,
        address: user.address
      }
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
module.exports = signup;