const {Schema, model } = require('mongoose');

const FlowerSchema = new Schema({
    name: {
        type:String,
        require:true
    },
    weight: {
        type: Number,
        require:true,
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
    },
    THC:{
        type:Number,
        require:true
    },
    CBD:{
        type:Number,
        require:true
    }
  

})

const Flower = model('Flower', FlowerSchema)

module.exports = Flower