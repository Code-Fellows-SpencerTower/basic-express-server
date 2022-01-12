'use strict';

// save names
// create names with constructor
class Name {
  constructor(name) {
    this.name = name;
  }
}
// add names to constructor
function createName(req, res) {
  console.log('createName Hit');
  // pull name param value out of request query and put in variable
  let { name } = req.query;
  console.log('name var from createName:', name);
  let nameMessage = new Name(name);

  res.status(200).send(nameMessage);
}
// add get to /person? to retreive names if in storage?

module.exports = createName;