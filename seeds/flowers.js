const Flower = require('../models')

const allFLower = [
    {
        "name": "hello",
        "THC": 12
    },
    {
        "name": "ZAZA",
        "THC": 50.56 
    },
    {
        "name": "today",
        "THC": 23.50
    },
    {
        "name": "tommorow land",
        "THC": 60.17
    }
];

const seedFlower = () => Flower.bulkCreate(allFLower)

console.log("flowers")

module.exports = seedFlower;