var mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  date: {
    type: Date,
    required: true,
    trim: true,
    lowercase: true,
  },
  course: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  image: {
      data: Buffer,
      contentType: String
  }
});

const attendance = mongoose.model("attendance", attendanceSchema);

module.exports = attendance;
