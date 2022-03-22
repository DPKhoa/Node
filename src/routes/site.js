const express = require('express');
const sitecontroller = require('../app/controllers/siteController ');
const router = express.Router();


router.get('/search', sitecontroller.search);
router.get('/', sitecontroller.index);

//newsConstroller.index
module.exports = router;