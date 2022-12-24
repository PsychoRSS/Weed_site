const  { Dab, Flower,} = require('../Models');

const resolvers = {
    Query:{
        Dabs: async () => {
            return await Dab.find({})
        },
        Flower: async() => {
            return await Flower.findOne({})
        },
    },

    Mutation: {
        addFlower: async (parent,{name, weight,price,sativa,indica,hybrid,THC,CBD}) => {
            return Flower.create, ({name, weight,price,sativa,indica,hybrid,THC,CBD})
        },
        removeFlower: async(parent, {name,weight,price,sativa,indica,hybrid,THC,CBD}) => {
            return Flower.findOneAndDelete({name})
        }
    },
}

module.exports = resolvers