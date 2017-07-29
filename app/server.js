'use strict'

module.exports = function (app) {

    const path = require('path');
    const apiRoute = require('./api/routes');

    const promise = new Promise((resolve, reject) => {
        if (!app) {
            let express = require('express');
            app = express();
            app.use(express.static('public'));
        }

        app.use((req, res, next) => {
            console.log("Asking for the endpoint: " + req.url);
            next();
        });

        const bodyParser = require('body-parser');
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.text());
        app.use(bodyParser.json());
        
        apiRoute(app);

        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname + '/../public/index.html'));
        });

        app.get('/index.html', (req, res) => {
            res.sendFile(path.join(__dirname + '/../public/index.html'));
        });

        app.get('*', (req, res) => {
            res.status(404);
            res.sendFile(path.join(__dirname + '/../public/404.html'));
        });


        const server = app.listen(process.env.PORT || 8888, () => {
            //console.log('Server working properly on ' + (process.env.PORT || 8888));
        });

        resolve(server);
    }, (err) => {
        reject(err);
    });
    return promise;
}