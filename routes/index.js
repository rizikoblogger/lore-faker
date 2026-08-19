const express = require('express');
const router = express.Router();
const packageJson = require('../package.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`
   <h3>LOREM AND FAKE DATA – Extended TOM Server v. ${packageJson.version}</h3>
            <hr>
            <p>If you are a developer - or if you know someone who can do it – here you find a server to extend TOMP capabilities!</p>
            <p><strong>However</strong>, to keep 'survivors' and servers <em>relatively</em> secure, some rules about (The Oil Meridian Protocol - TOMP) should be followed:</p>
            <ol>
                <li>Servers will be accessed by HTTP/1.1 or HTTPS/1.1, according <a href="https://httpwg.org/specs/rfc9112.html">RFC 9112</a> protocol</li>
                <li>Servers always will respond to requests with HTTP Response Status Codes 200 OK
                    (<a href="https://httpwg.org/specs/rfc9110.html#overview.of.status.codes">RFC 9110</a>)</li>
                <li><strong>All Server Responses</strong> will be according to JSON Array Formated
                    <a href="https://datatracker.ietf.org/doc/rfc8259/">RFC 8259</a></li>
                <li>It provides TWO <em>endpoints</em>: <br>
                <p><code>POST /api/tomp/help</code> - To response a JSON Array with HELP: content</p>
                <p><code>POST /api/tomp/execute?command=SERVER_RECOGNIZED_COMMAND </code> - To command some Server processing and response accordingly</p>
                </li>
                <li>All requests from X-Terminal to the remote server should contain: <br>
                  <pre>
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'                      
                  </pre>                
                </li>
            </ol>
           
  `);
});

module.exports = router;
