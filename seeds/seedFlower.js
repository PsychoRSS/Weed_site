const sequelize = require('../config/connection');
const seedFlower = require('./flowers')


const seedAll = async () => {
    await sequelize.sync({force:true});

    await seedFlower();

    console.log("complete")
}