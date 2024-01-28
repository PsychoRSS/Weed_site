const Flower = require('./Flower');
const User = require('./User');

User.hasMany(Flower, { as: 'flower'});


module.exports = { User , Flower }