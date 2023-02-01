
const router = require('express').Router();
const {getFlower} = require('../../controllers/weedController')

router.route('/').get(getFlower)

module.exports = router;