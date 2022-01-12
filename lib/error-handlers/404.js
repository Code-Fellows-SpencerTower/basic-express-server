'use strict';

function notFoundError(req, res, next) {
  console.log('Error: Route not found.');
  res.status(404).send('Not Found');
}

module.exports = notFoundError;
