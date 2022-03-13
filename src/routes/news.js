const express = require('express');
const router = express.Router();

const newsController =  require('../app/controllers/Newscontroller');

router.get('/:slug', newsController.show);
router.get('/', newsController.index);
//newsConstroller.index
module.exports = router;