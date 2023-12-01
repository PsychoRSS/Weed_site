import { Sequelize, DataTypes } from 'sequelize';

const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allownull:false
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
        
    }
})