const router = require('express').Router();
const {Flower, User} = require('../models');

// Homepage
router.get('/', async (req,res) => {
    try {
        const allFlower = await Flower.findAll();
        res.render()
        res.status(200).json(allFlower)
    } catch (err) {
        console.log(err)

    }
});

module.exports = router