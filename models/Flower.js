const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Flower extends Model {}

Flower.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: flase,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    THC: {
        type: DataTypes.DECIMAL,
        allowNull:false
    }
},
{
    sequelize,
    timestamps:false,
    freezeTableName: true,
    underscored: true,
    modelName: 'flower'
}
);

module.exports = Flower