const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const proxy = require('http-proxy-middleware');
const dotenv = require('dotenv').config();
const app = express();
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
    process.env.HOST = nuxt.options.server.host;
    process.env.PORT = nuxt.options.server.port;
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
}

start();