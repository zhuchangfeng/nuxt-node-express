const express = require('express');
const app = express();
const api = require("./api");
const consola = require('consola');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const { TESTHOST, TESTPROT } = dotenv.parsed;
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", api)
app.listen(TESTPROT, TESTHOST);
consola.ready({
    message: `Server listening on http://${TESTHOST}:${TESTPROT}`,
    badge: true
});
console.log(
    [
        'Powered by AMP ⚡ HTML – Version]',
        '###### ######  ##    ######  #####  ##### ',
        '##     ##      ##      ##      ##    ## ',
        '##     ##      ##      ##       ##  ## ',
        '###### ######  ##      ##         ##    ',
        '##     ##      ##      ##       ##  ##  ',
        '##     ##      ##      ##      ##    ##',
        '##     ####### ##### ######  #####  #####'
    ].join('\n')
)