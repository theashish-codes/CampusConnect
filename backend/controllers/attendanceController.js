const Attendance = require("../models/Attendance");

// MARK ATTENDANCE (Admin / Faculty)
exports.markAttendance = async (req, res) => {
  const { studentId, subject, date, status } = req.body;

  try {
    const attendance = await Attendance.create({
      student: studentId,
      subject,
      date,
      status,
      markedBy: req.user._id,
    });

    res.status(201).json({
      message: "Attendance marked successfully",
      attendance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET STUDENT ATTENDANCE
exports.getStudentAttendance = async (req, res) => {
  try {
    const records = await Attendance.find({
      student: req.user._id,
    });

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//summary
exports.getAttendanceSummary = async (req, res) => {
  try {
    const records = await Attendance.find({
      student: req.user._id,
    });

    const summary = {};

    records.forEach((rec) => {
      if (!summary[rec.subject]) {
        summary[rec.subject] = { total: 0, present: 0 };
      }
      summary[rec.subject].total += 1;
      if (rec.status === "present") {
        summary[rec.subject].present += 1;
      }
    });

    const result = Object.keys(summary).map((subject) => {
      const total = summary[subject].total;
      const present = summary[subject].present;
      const percentage = ((present / total) * 100).toFixed(2);

      return {
        subject,
        total,
        present,
        percentage,
        eligible: percentage >= 75,
      };
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//percentage and eligibility

exports.getAttendancePercentage = async (req, res) => {
  try {
    const { studentId, subject } = req.params;

    const records = await Attendance.find({ studentId, subject });

    if (records.length === 0) {
      return res.status(404).json({
        message: "No attendance records found"
      });
    }

    const totalClasses = records.length;
    const presentCount = records.filter(
      r => r.status === "present"
    ).length;

    const percentage = ((presentCount / totalClasses) * 100).toFixed(2);

    const isEligible = percentage >= 75;

    res.json({
      studentId,
      subject,
      totalClasses,
      presentCount,
      attendancePercentage: percentage,
      examEligible: isEligible
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


