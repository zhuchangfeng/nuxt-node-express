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
console.log((_ => [...
    "`1234567890-=~~QWERTYUIOP[]\\~ASDFGHJKL;'~~ZXCVBNM,./~"
].map(x => (o += `/${b = '_'.repeat(w = x < y ? 2 : ' 667699'[x = ["Bs", "Tab", "Caps", "Enter"][p++] || 'Shift', p])}\\|`, m += y + (x + ' ').slice(0, w) + y + y, n += y + b + y + y, l += ' __' + b)[73] && (k.push(l, m, n, o), l = '', m = n = o = y), m = n = o = y = '|', p = l = k = []) && k.join `
`)());