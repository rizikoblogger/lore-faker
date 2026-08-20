const express = require('express');
const router = express.Router();
let {faker} = require('@faker-js/faker');


/* GET/POST faker actions. */
router.all('/', function (req, res, next) {

    try {

        // CAPTURE COMMAND
        const command = req.query.command;
        // CHECK IF BELONG TO APP (FAKE) DOMAIN - RETURNS NOTHING CASE NOT
        if (!command || !command.toUpperCase().startsWith('FAKE')) {
            return res.json(['']);
        }
        // IF BELONGS TO DOMAIN, SPLIT COMMAND
        const parts = command.toUpperCase().split(' ');
        // CONSIDER MINIMAL COMMAND LENGTH
        if (parts.length < 2) {
            return res.json(['FAKE: ACTION COMMAND NOT FOUND!']);
        }
        // IF COMMAND LENGTH IS OK, CAPTURE ACTION
        const action = parts[1];

        if(action.toUpperCase().startsWith('HEL')){
            return res.redirect('/api/tomp/help');
        }

        if(action.toUpperCase().startsWith('LOC')){
            const long = faker.location.longitude();
            const lat = faker.location.latitude();
            return res.json([`FAKE: LATITUDE: ${lat}, LONGITUDE: ${long}`]);
        }

        if(action.toUpperCase().startsWith('LOR')){
            const lorem = faker.lorem.sentence();
            return res.json([`FAKE: LOREM: ${lorem}`]);
        }

        if(action.toUpperCase().startsWith('NAM')){
            const name = faker.person.fullName();
            return res.json([`FAKE: FULL NAME: ${name}`]);
        }

        if(action.toUpperCase().startsWith('BIO')){
            const bio = faker.person.bio();
            return res.json([`FAKE: BIO: ${bio}`]);
        }
        // IF ACTION IS NOT FOUND, RETURN FAKE MESSAGE
        return res.json(['FAKE: NO COMMAND FOUND!']);


    } catch (err) {
        return res.json(['FAKE: ERROR ON THE GRID!']);
    }

});


module.exports = router;
