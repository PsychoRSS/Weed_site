const {Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')

const account = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:email,
        require:true,
        unique:true,
        match:[/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type:String,
        require:true,
        minlength: 5,
    }
        
   
});

accountSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

accountSchema.methods.isCorrectPassword() = async function (password) {
    return bcrypt.compare(password, this.password);
}


const Account = model('Account', account)

module.exports = Account
