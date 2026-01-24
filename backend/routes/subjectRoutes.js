const express = require("express");
const router = express.Router();

const {
  createSubject,
  getAllSubjects,
} = require("../controllers/subjectController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// 🔹 Admin creates subject
router.post(
  "/",
  protect,
  authorizeRoles("admin"),
  createSubject
);

// 🔹 Students / Faculty can view subjects
router.get(
  "/",
  protect,
  getAllSubjects
);

module.exports = router;
