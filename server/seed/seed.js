const db = require('../Config/connection')
const {Dab, Flower} = require('../models')

const Data = require('./seed.json')
const DabData = require('./DabData')
db.once('open', async () => {
    await Flower.deleteMany({})
    await Dab.deleteMany({})
    const Weed =  await Flower.create(Data);
    const eldab =  await Dab.insertMany(DabData)

    
    console.log('good');
    process.exit(0);
})


  