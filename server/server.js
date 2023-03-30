const express = require('express');

// bring in Apollo server
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

// bring in typeDefs and resolvers made in schemas folder
const { typeDefs, resolvers } = require('./schemas');

// bring in mongoose connection from config folder
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

// invoke express as a function
const app = express();

// create an apollo server that uses the typeDefs and resolvers
const server = new ApolloServer({
    typeDefs,
    resolvers,
})

// middleware that parses put and post requests, allow access to request body, and recognizes objects as strings and arrays
app.use(express.urlencoded({extended: false}));

// recognizes request objects as a json object
app.use(express.json())

// uses the build folder for the application
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
  
// function to start the apollo server with the application
const startApolloServer = async(typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({app});
  
    db.once('open', () => {
        app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
}
  
startApolloServer(typeDefs, resolvers);