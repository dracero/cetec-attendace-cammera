var express = require('express');
var router = express.Router();

var {
  add_user,
  put_user,
  delete_user
} = require('../controllers/attendance_controller.js');

router.post('/student', add_user);
router.put('/student', put_user);
router.delete('/student', delete_user);

module.exports = router;
