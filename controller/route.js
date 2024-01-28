const router = require('express').Router();
const {Flower, User} = require('../models');

// Homepage
router.get('/', async (req,res) => {
    try {
        
        let allFlower = await Flower.findAll();
        

        let flower = allFlower.map((flowers)=> flowers.get({plain:true}));

        res.render('homepage', {
            flower
        });

        // res.status(200).json(flower)
        // console.log(allFlower[0].id)

    } catch (err) {
        console.log(err)

    }
});

module.exports = router