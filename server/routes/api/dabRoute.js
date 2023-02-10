const router = require('express').Router();
const {
    getDab,
    getOneDab,
    createDab,
    deleteDab,
} = require('../../controllers/dabController')

router.route('/').get(getDab)
router.route('/:name').get(getOneDab)

module.exports = router;