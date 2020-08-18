require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const { schema } = require('./schema/schema');

mongoose.connect(process.env.DB_ATLAS_CONNECTION_STRING);
mongoose.connection.once('open', () => {
  console.log('connected to Database....');
});
const app = express();

// allow cross-origin requests
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server running...');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(process.env.PORT, () => {
  console.log('Listening on por 4000');
});
