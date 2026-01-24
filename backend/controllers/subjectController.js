const Subject = require("../models/Subjects");

// 🔹 Admin creates a subject
exports.createSubject = async (req, res) => {
  try {
    const { name, code, semester, faculty } = req.body;

    // Basic validation
    if (!name || !code || !semester || !faculty) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const subject = await Subject.create({
      name,
      code,
      semester,
      faculty,
    });

    res.status(201).json({
      message: "Subject created successfully",
      subject,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// 🔹 Get all subjects (students / faculty)
exports.getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find().populate(
      "faculty",
      "name email role"
    );

    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
