const router = require('express').Router();
const {Flower, User} = require('../models');


router.get('/', async (req,res) => {
    try {
        const allFlower = await Flower.findAll();
        console.log(allFlower)
        res.status(200).json(allFlower)
    } catch (err) {
        console.log(err)

    }
});

module.exports = router