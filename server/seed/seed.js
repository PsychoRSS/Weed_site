const db = require('../config/connection')
const {Dab, Flower} = require('../models')

const Data = require('./seed.json')

db.once('open', async () => {
    await Flower.deleteMany({})
    await Dab.deleteMany({})
    const Weed =  await Flower.insertMany(Data)

    console.log('good');
    process.exit(0);
})


  