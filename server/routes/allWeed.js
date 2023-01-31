const router = require('express').Router();
const { Flower,Dab } = require('../Models')

router.get('/all', (req,res) => {
    
    const flowerData = Flower.findAll()

    return res.status(200).json(flowerData)

});

router.post('/hru', (req, res) => {
    return res.status(200).json(Flower)
})
