'use strict';

const express = require('express');
const app = express();



const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFoundError = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');
const createName = require('./middleware/createName.js');


app.use(logger);
// to send data back in JSON format
app.use(express.json());

// test home route
app.get('/', (req, res, next) => {
  console.log('Home Route Hit');
});

// create /person route - POST
// uses validator to check user's input

// validates input, if valid calls createName
app.post('/person', validator, createName);


app.use(serverError);
app.use(notFoundError);


module.exports = {
  start: function (port) {
    app.listen(port, () => {
      console.log('Server is listening on: ', port);
    });
  },
  app,
};