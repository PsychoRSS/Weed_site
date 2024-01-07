const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allownull:false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
       unique:true,
        allownull:false
    },
    email: {
        type: DataTypes.STRING,
        allownull:false,
        validate: {
            is: []
        },
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allownull:false,
        
    },
    weed: {
        type: DataTypes.INTEGER,
        refrences: {
            model: 'flower',
            key: 'id'
        }
    }

    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        underscored:true,
        modelName: 'user',
    }
);

module.exports = User