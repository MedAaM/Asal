const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireStaffAuth = async (req, res, next) => {
  const Authorization = req.headers["authorization"];
  if (!Authorization) {
    return res.status(401).json({ mssg: "A staff member must be logged in" });
  }
  const token = Authorization.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id || decodedToken._id; // Ensure you extract the correct user ID field
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ mssg: "No user found with this token" });
    }

    if (!user.isStaff || !user.isStaff.status) {
      return res.status(403).json({ mssg: "This user is not a staff member" });
    }

    req.user = {_id : user._id};
    console.log(req.user);
    next();
  } catch (error) {
    console.error("Error verifying token or finding user:", error); // Improved logging
    return res.status(500).json({ mssg: "Error verifying token or finding user", error: error.message || error });
  }
};

module.exports = requireStaffAuth;
