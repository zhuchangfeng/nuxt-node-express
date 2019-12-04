const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const proxy = require('http-proxy-middleware');
const dotenv = require('dotenv').config();
const app = express();
const path = require('path');
const routeName = `integration.localhost:${dotenv.parsed.TESTPROT}`;
const targetURL = `http://${dotenv.parsed.TESTHOST}:${dotenv.parsed.TESTPROT}`
const exampleProxy = proxy({
    target: targetURL, // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
        // '^/api/old-path': '/api/new-path', // rewrite path
    },
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        [routeName]: targetURL, // host only
    }
});
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = !(app.env === 'production');
// Visit  static file
app.use(express.static('static'))
    // proxy use
app.use('/api', exampleProxy);
async function start() {
    // Instantiate nuxt.js
    const nuxt = new Nuxt(config);

    const {
        host = process.env.HOST || '127.0.0.1',
            port = process.env.PORT || 5000
    } = nuxt.options.server;

    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    } else {
        await nuxt.ready();
    }
    app.use(nuxt.render);

    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    });
    console.log((_ => [...
        "`1234567890-=~~QWERTYUIOP[]\\~ASDFGHJKL;'~~ZXCVBNM,./~"
    ].map(x => (o += `/${b = '_'.repeat(w = x < y ? 2 : ' 667699'[x = ["Bs", "Tab", "Caps", "Enter"][p++] || 'Shift', p])}\\|`, m += y + (x + ' ').slice(0, w) + y + y, n += y + b + y + y, l += ' __' + b)[73] && (k.push(l, m, n, o), l = '', m = n = o = y), m = n = o = y = '|', p = l = k = []) && k.join `
`)());
}

start();