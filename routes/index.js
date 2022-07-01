var express = require('express');
var router = express.Router();
const multer = require('multer');

var {
  add_student,
  put_student,
  delete_student
} = require('../controllers/attendance_controller.js');

router.post('/student', multer().none(), add_student);
router.put('/student', put_student);
router.delete('/student', delete_student);

module.exports = router;
