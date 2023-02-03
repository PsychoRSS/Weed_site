
const router = require('express').Router();

const {getFlower, 
    createFlower, 
    getOneFlower,
    
    } = require('../../controllers/weedController')

router.route('/').get(getFlower).post(createFlower)
router.route('/:name').get(getOneFlower)

module.exports = router;