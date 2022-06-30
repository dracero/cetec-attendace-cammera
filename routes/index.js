var express = require('express');
var router = express.Router();

var {
  add_student,
  put_student,
  delete_student
} = require('../controllers/attendance_controller.js');

router.post('/student', add_student);
router.put('/student', put_student);
router.delete('/student', delete_student);

module.exports = router;
