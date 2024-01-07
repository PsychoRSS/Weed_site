const Router = require('express').Router;

// Gets all avalible flower
router.get('/', async (req,res) => {
    try {
        const allFlower = await Flower.findAll();
        res.status(200).json(allFlower)
    } catch (err) {
        console.log(err)

    }
});
