const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(
  'mongodb+srv://gaurrus:Q1V8iEieHh1vcDhJ@cluster0.pbegz.mongodb.net/ninja-db',
);
mongoose.connection.once('open', () => {
  console.log('connected to Database....');
});
const app = express();

// allow cross-origin requests
app.use(cors());

app.get('/', function (req, res) {
  res.send('hello world');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(4000, () => {
  console.log('Listening on por 4000');
});
