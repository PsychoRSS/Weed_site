const {Schema, model } = require('mongoose');

const DabSchema = new Schema({
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
        require:true
    },
    sativa: {
        type:Boolean,
        require:true
    },
    indica: {
        type:Boolean,
        require:true
    },
    hybrid: {
        type:Boolean,
        require:true
    }

})

module.exports = DabSchema