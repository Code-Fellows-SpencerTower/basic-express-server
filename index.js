'use strict';

// require lib/server.js
const server = require('./lib/server.js');
// require dotenv
require('dotenv').config();

// reads port from .env
const PORT = process.env.PORT || 3000;

// call start() with port to start server
server.start(PORT);