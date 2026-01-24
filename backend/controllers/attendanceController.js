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

// summmary 
exports.getMyAttendanceSummary = async (req, res) => {
  try {
    const studentId = req.user._id;

    const records = await Attendance.find({ student: studentId })
      .populate("subject", "name");

    if (records.length === 0) {
      return res.status(200).json({
        message: "No attendance records found",
        summary: []
      });
    }

    const summaryMap = {};

    records.forEach((rec) => {
      const subjectId = rec.subject._id.toString();

      if (!summaryMap[subjectId]) {
        summaryMap[subjectId] = {
          subject: rec.subject.name,
          totalClasses: 0,
          present: 0
        };
      }

      summaryMap[subjectId].totalClasses += 1;

      if (rec.status === "present") {
        summaryMap[subjectId].present += 1;
      }
    });

    const summary = Object.values(summaryMap).map(item => {
      const percentage = Math.round(
        (item.present / item.totalClasses) * 100
      );

      return {
        subject: item.subject,
        totalClasses: item.totalClasses,
        present: item.present,
        percentage,
        eligibleForExam: percentage >= 75
      };
    });

    res.status(200).json({
      studentId,
      summary
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to get attendance summary",
      error: error.message
    });
  }
};
