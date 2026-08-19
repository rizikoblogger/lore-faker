const express = require('express');
const router = express.Router();
const packageJson = require('../package.json');

router.all('/', function(req, res, next) {
    return res.json([
        `LOREM AND FAKE DATA – Extended TOM Server v. ${packageJson.version}`,
        '..................................................................',
        'HELP: FAKE HELP - SHOW THIS FULL HELP COMMANDS STARTED BY FAKE...',
        'HELP: FAKE LOC - RETURNS A FAKE LOCATION (LATITUDE AND LONGITUDE)',
        'HELP: FAKE LOREM - RETURNS A FAKE LOREM SENTENCE',
        'HELP: FAKE NAME - RETURNS A FAKE PERSON NAME',
        'HELP: FAKE BIO - RETURNS A FAKE BIOGRAPHY',
    ])
});


module.exports = router;
