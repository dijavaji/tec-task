const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
//const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");
require("dotenv").config({ path: ".env" });

console.log("string db conexion " + process.env.BBDD);

mongoose.set('strictQuery', true);
mongoose.connect(process.env.BBDD, (err, _) => {
  if (err) {
    console.log("Error de conexion");
    throw err;
  } else {
    console.log("conexion a base de datos esta correctamente...");
    initApolloServer();
  }
});

async function  initApolloServer() {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({ typeDefs, resolvers });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log("################################################");
    console.log(`🚀  servidor ON en la url ${url}`);
    console.log("################################################");
  });
}
