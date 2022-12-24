const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Dab {
        name: String
        weight: Int
        price: Int
        sativa: Boolean
        indica: Boolean
        hyprid: Boolean
        THC: Int
        CBD: Int
    }
    type Flower {
        name: String
        weight: Int
        price: Int
        sativa: Boolean
        indica: Boolean
        hyprid: Boolean
        THC: Int
        CBD: Int
    }
    type Query {
        Dabs: [Dab]
        Flower:[Flower]
    }
    type Mutation {
        addFlower(name: String!,
            weight: Int!,
            price: Int!,
            sativa: Boolean!,
            indica: Boolean!,
            hyprid: Boolean!,
            THC: Int!,
            CBD: Int!): Flower
        removeFlower(name: String!,
            weight: Int!,
            price: Int!,
            sativa: Boolean!,
            indica: Boolean!,
            hyprid: Boolean!,
            THC: Int!,
            CBD: Int!): Flower
    }
`;

module.exports = typeDefs;