'use strict';


const server = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing logger features', () => {

  it('Should log the method and path of the request', async () => {
    const request = await request.post('/person').send({
      
    });
    expect(request.method).toEqual('POST');
    // expect(console.log(req.path)).toEqual('/person');
  });
});