const {Flower} = require('../models')

module.exports = {
    getFlower(req, res) {
        Flower.find()
        .then((flower) => res.json(flower))
        .catch((err) => res.json(err));
    },
    getOneFlower(req, res) {
        Flower.findById({ _id: req.params.flowerid })
        .then((flower) => 
             !flower
             ?res.status(404).json({ message: 'no flower with that ID'})
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
        Flower.deleteOne({_id: req.params.flowerid})
        .then((flower) =>
        !flower
        ?res.status(404).json({message: 'No flower With that ID'})
        :res.json(flower))
        .catch((err) => { 
            console.log(err);
          return res.status(500).json(err)
        })
    },
    
}