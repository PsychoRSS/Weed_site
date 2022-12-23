const {Schema, model } = require('mongoose');

const FlowerSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    weight: {
        type: Number,
        required:true,
    },
    price: {
        type:Number,
        required:true
    },
    sativa: {
        type:Boolean,
        required:true
    },
    indica: {
        type:Boolean,
        required:true
    },
    hybrid: {
        type:Boolean,
        required:true
    }

})

module.exports = FlowerSchema