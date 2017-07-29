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

    it('Should return html content on root', function(done) {
        request(app)
            .get('/')
            .expect('Content-Type', "text/html; charset=UTF-8")
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });

    it('Should return html content on "/index.html"', function(done) {
        request(app)
            .get('/index.html')
            .expect('Content-Type', "text/html; charset=UTF-8")
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });


    it('Should return 404 html content on "/asd"', function(done) {
        request(app)
            .get('/asd')
            .expect('Content-Type', "text/html; charset=UTF-8")
            .expect(404)
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });
});