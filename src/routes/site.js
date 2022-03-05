const express = require('express');
const sitecontroller = require('../app/controllers/siteController');
const router = express.Router();


router.use('/search', sitecontroller.search);
router.use('/', sitecontroller.index);

//newsConstroller.index
module.exports = router;