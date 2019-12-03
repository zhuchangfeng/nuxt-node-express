const express = require('express');
const app = express();
const api = require("./api");
const consola = require('consola');
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const { TESTHOST, TESTPROT } = dotenv.parsed;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(api)
app.listen(TESTPROT, TESTHOST);
consola.ready({
    message: `Server listening on http://${TESTHOST}:${TESTPROT}`,
    badge: true
});
