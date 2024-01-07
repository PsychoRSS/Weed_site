const Flower = require('./Flower');
const User = require('./User');

User.hasMany(Flower);


module.exports = { User , Flower }