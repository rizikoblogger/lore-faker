const express = require('express');
const router = express.Router();



router.all('/', function(req, res, next) {
    return res.json([
        'HELP: FAKE HELP - SHOW THIS FULL HELP COMMANDS STARTED BY FAKE...',
        'HELP: FAKE LOC - RETURNS A FAKE LOCATION (LATITUDE AND LONGITUDE)',
        'HELP: FAKE LOREM - RETURNS A FAKE LOREM SENTENCE',
        'HELP: FAKE NAME - RETURNS A FAKE PERSON NAME',
        'HELP: FAKE BIO - RETURNS A FAKE BIOGRAPHY',
    ])
});


module.exports = router;
