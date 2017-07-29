'use strict'

const marvelApi = require('marvel-api');

const publicKey = process.env.publicKey || process.env.npm_package_config_publicKey;
const privateKey = process.env.privateKey || process.env.npm_package_config_privateKey;

var marvel = marvelApi.createClient({
  publicKey,
  privateKey,
});

module.exports = (app) => {
    app.route('/api/getByName/:name').get((req, res) => {
        if (!isNaN(req.params.name)) {
            res.status(400).json({ error: 'Name inqualified' });
        } else {
            marvel.series.findByTitle(req.params.name, (err, results) => {
                if (err) {
                    res.status(504).json({ error: 'Something went wrong' });
                }

                res.status(200).json(results.data);
            });

        }
    })
}