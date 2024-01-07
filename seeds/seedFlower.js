const sequelize = require('../config/connection');
const seedFlower = require('./flowers');


const seedAll = async () => {
    try {
    await sequelize.sync({force:true})

    await seedFlower();

    console.log("complete");

    process.exit(0)

    } catch (err) {
        console.log(err)
    }
}

seedAll()