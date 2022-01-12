'use strict';

// logs method and path
function logger(req, res, next) {
  console.log('logger function');
  console.log('Request method:', req.method, 'Request path:', req.path);
  next();
}

module.exports = logger;