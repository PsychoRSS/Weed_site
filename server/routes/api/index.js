const router = require('express').Router();
const flowerWeed = require('./flowerRoute')
const dabWeed = require('./dabRoute')

router.use('/flower', flowerWeed);
router.use('/dab', dabWeed)


module.exports = router