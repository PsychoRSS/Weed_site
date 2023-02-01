const router = require('express').Router();
// const router = require('express').Router();
const allWeed = require('./allWeed')
// const { clog } = require('../middleware/clog');
// const { Router } = require('express');



router.use('/all', allWeed);

// router.use(clog);

module.exports = router