const express = require("express");
const {
  markAttendance,
  getStudentAttendance,
  getAttendanceSummary,
  getAttendancePercentage,
} = require("../controllers/attendanceController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

const router = express.Router();

// Faculty/Admin marks attendance
router.post(
  "/mark",
  protect,
  authorizeRoles("admin", "faculty"),
  markAttendance
);

// Student views own attendance
router.get(
  "/my",
  protect,
  authorizeRoles("student"),
  getStudentAttendance
);

//summary
router.get(
  "/summary",
  protect,
  authorizeRoles("student"),
  getAttendanceSummary
);

//percentage
router.get(
  "/percentage/:studentId/:subject",
  getAttendancePercentage
);


module.exports = router;
