const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/student",
  protect,
  authorizeRoles("student"),
  (req, res) => {
    res.json({ message: "Student route accessed", user: req.user });
  }
);

router.get(
  "/admin",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "Admin route accessed" });
  }
);

module.exports = router;
