const express = require('express');
const greenfield = require('./routes/greenfield');

const app = express();

// Body parser
app.use(express.json());

// Mount routers - connect the route to the greenfield.js
app.use('/api/v1/greenfield', greenfield);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});