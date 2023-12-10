const router = require('express').Router;
const {Flower, User} = require('../models')
router.get('/', async (req,res) => {
    try {
        const allFlower = Flower.findAll();
        return allFlower
    } catch (err) {
        console.log(err)

    }
});