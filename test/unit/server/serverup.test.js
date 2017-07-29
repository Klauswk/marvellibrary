'use strict'

let express = require('express');
let app = express();
let server;
let request = require('supertest');
let expect = require('expect.js');

describe('Server Test', function() {

    beforeEach(function(done) {
        require('./../../../app/server')(app).then(function(ser) {
            server = ser;
            done();
        }, function(error) {
            console.log(error);
            done();
        });
    });

    afterEach(function(done) {
        server.close(done);
    });
});