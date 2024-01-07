const router = require('express').Router();
const {Flower, User} = require('../models');

// Homepage
router.get('/', async (req,res) => {
    try {
        const allFlower = await Flower.findAll();
        // res.status(200).json(allFlower)
        res.render('homepage');
    } catch (err) {
        console.log(err)

    }
});

module.exports = router