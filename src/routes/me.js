const express = require('express');
const router = express.Router();

const meController =  require('../app/controllers/meController');

router.get('/stored/courses', meController.storedCreate);
router.get('/trash/courses', meController. trashCourses);
//newsConstroller.index
module.exports = router;