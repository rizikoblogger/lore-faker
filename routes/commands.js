const express = require('express');
const router = express.Router();
let {faker} = require('@faker-js/faker');


/* GET/POST faker actions. */
router.all('/', function (req, res, next) {

    try {

        const command = req.query.command;
        if (!command || !command.startsWith('FAKE')) {
            return res.json(['FAKE: NO COMMAND FOUND!']);
        }
        const parts = command.split(' ');

        if (parts.length < 2) {
            return res.json(['FAKE: ACTION COMMAND NOT FOUND!']);
        }

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

        return res.json(['FAKE: COMMAND NOT FOUND!']);


    } catch (err) {
        return res.json(['FAKE: ERROR ON THE GRID!']);
    }

});


module.exports = router;
