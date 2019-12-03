const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const verbose = process.env.NODE_ENV == 'development';
const app = express();
app.map = function(a, route) {
    route = route || '';
    for (var key in a) {
        switch (typeof a[key]) {
            case 'object':
                app.map(a[key], route + key);
                break;
            case 'function':
                if (verbose) console.log('%s %s', key, route);
                router[key](route, a[key]);
                break;
        }
    }
};
app.map({
    '/api/users': {
        get: function(req, res) {
            res.status(200).send('user list');
        },
        delete: function(req, res) {
            res.send('delete users');
        },
        '/:uid': {
            get: function(req, res) {
                res.send('user ' + req.params.uid);
            },
            '/pets': {
                get: function(req, res) {
                    res.send('user ' + req.params.uid + '\'s pets');
                },
                '/:pid': {
                    delete: function(req, res) {
                        res.send('delete ' + req.params.uid + '\'s pet ' + req.params.pid);
                    }
                }
            }
        }
    }
});
router.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router.get("/api/student", function(req, res) {
    let newS = {
        id: +new Date(),
        creat: new Date().toLocaleString(),
        update: new Date().toLocaleString()
    };
    fs.readFile(path.resolve(__dirname, './json/student.json'), "utf-8", function(err, data) {
        if (err) throw err;
        try {
            data = JSON.parse(Object.assign(data, newS))
        } catch (error) {
            return res.status(200).send(error)
        }
        res.status(200).send(data)
    })
});

router.get("/api/orderList", function(req, res) {
    let newS = {
        time: +new Date(),
        id: parseInt(Math.random() * 100),
        update: +new Date().toDateString()
    };
    fs.readFile(path.resolve(__dirname, './json/order_list.json'), "utf-8", function(err, data) {
        if (err) throw err;
        try {
            data = JSON.parse(Object.assign(data, newS))
        } catch (error) {
            return res.status(200).send(error)
        }
        res.status(200).send(data)
    })
});

router.get("/api/job/:id", function(req, res, next) {
    const id = req.params.id;
    if (!/^[0-9]*$/.test(id)) {
        let info = {
            err_no: 501,
            errmsg: ":id is not type number?"
        }
        res.status(501).send(info);
        return;
    }
    fs.readFile(path.resolve(__dirname, './json/job.json'), "utf-8", function(err, data) {
        if (err) throw err;
        res.status(200).send(data)
    })
});

router.post("/api/user", function(req, res, next) {
    if (Object.keys(req.body).indexOf("undefined") != -1) {
        if (req.query) {
            const name = req.query.name ? req.query.name : false;
            const age = req.query.age ? req.query.age : false;
            if (name && age) {
                res.status(200).send(req.query);
            } else {
                if (!name) {
                    var err = {
                        err_code: 404,
                        err_msg: 'cannot find age ' + age
                    }
                    res.status(404).send(err)
                }
                if (!age) {
                    var err = {
                        err_code: 404,
                        err_msg: 'cannot find age ' + age
                    }
                    res.status(404).send(err)
                }
            }
        }
    } else {
        res.status(200).send(req.body);
    }
});
module.exports = router;