const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize ('sqlite::memory:');

const Flower = new Sequelize();

try {
    sequelize.authenticate();
    console.log("Connecion good *thumbs up*")
} catch (error) {
 console.log('error found buthead', error)
};

