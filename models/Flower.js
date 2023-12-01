import { Sequelize, DataTypes } from 'sequelize';

const sequelize = require('../config/connection');

class Flower extends Model {}

Flower.init({
    id:{
        type: DataTypes.INTEGER,
        allownull: flase,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allownull:false
    },
    THC: {
        type: DataTypes.DECIMAL,
        allownull:false
    }
})
