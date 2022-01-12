'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const { describe } = require('yargs');
const { it } = require('jest-circus');
const { expect } = require('@jest/globals');
const request = supertest(server.app);

describe('Testing server.js', () => {

  it('Should respond to a POST to /person', async () => {
    let response = await request.post('/person?name=test');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('test');
  });
});