const validateSignup = (req, res, next) => {
  const {
    username,
    email,
    password,
    gender,
    mobile,
    address
  } = req.body;
  if (!username || username.length < 3) {
    return res.status(400).json({
      error: "Username must be at least 3 characters"
    });
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailPattern.test(email)) {
    return res.status(400).json({
      error: "Please enter a valid email"
    });
  }
  if (!password || password.length < 6) {
    return res.status(400).json({
      error: "Password must be at least 6 characters"
    });
  }
  if (!gender) {
    return res.status(400).json({
      error: "Gender is required"
    });
  }
  if (!mobile || mobile.length !== 10) {
    return res.status(400).json({
      error: "Mobile number must contain 10 digits"
    });
  }
  if (
    !address ||
    !address.buildingFlat ||
    !address.street ||
    !address.city ||
    !address.state ||
    !address.pincode
  ) {
    return res.status(400).json({
      error: "Please enter all address details"
    });
  }
  next();
};
module.exports = validateSignup;