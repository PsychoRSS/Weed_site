const Flower = require('../models/Flower');

module.exports = {
    getFlower(req, res) {
        Flower.find()
        .then((flower) => res.json(flower))
        .catch((err) => res.json(err));
    },
    getOneFlower(req, res) {
        Flower.findOne({ name: req.params.name })
        .then((flower) => 
             !flower
             ?res.status(404).json({ message: 'No flower with that Name'})
             : res.json(flower)
             )
             .catch((err) => res.status(500).json(err))
    },
    createFlower(req, res) {
        Flower.create(req.body)
        .then((flower) => res.json(flower))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    deleteFlower(req, res) {
        Flower.findOneAndRemove({ name: req.params.name})
        .then((flower) =>
        !flower
        ?res.status(404).json({message: 'No flower With that Name'})
        :res.json(flower))
        .catch((err) => { 
            console.log(err);
          return res.status(500).json(err)
        })
    },
    
}