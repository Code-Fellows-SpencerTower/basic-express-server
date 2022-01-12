'use strict';

function serverError(err, req, res, next) {
  console.error('Error: Server Error');
  console.log(err);
  res.status(500).send('Server Error');
}

module.exports = serverError;