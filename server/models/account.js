const {Schema, model } = require('mongoose');

const account = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:email,
        require:true
    },
    password: {
        type:String,
        require:true
    }
        
    

})

const Account = model('Account', account)

module.exports = Account
