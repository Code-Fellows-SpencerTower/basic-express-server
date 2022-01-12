'use strict';

// check query for name property
// send request through if valid
// force error if not valid
function validator(req, res, next) {
  console.log('validator Hit');
  const name = req.query.name;
  if (name) {
    next();
  } else {
    next('Bad Request');
  }
}


module.exports = validator;