const express = require('express');
const db = require('./Config/connection');
const { typeDefs, resolvers } = require('./Schemas');
const { ApolloServer } = require('apollo-server-express')
// const { Flower,Dab } = require('./Models');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({app});

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
}

startApolloServer(typeDefs, resolvers)