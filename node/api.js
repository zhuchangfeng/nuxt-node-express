const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const upload = require("./upload");
const verbose = process.env.NODE_ENV == 'development';
const app = express();
/**
 *  object  create  API
 */
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
/**
 * users API
 * --------/users
 *   ------/:uid
 *     ----/pets  
 *       --/:pid
 */
app.map({
    '/users': {
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
/**
 * router All Entrance
 */
router.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/**
 * student API
 */
router.get("/student", function(req, res) {
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
/**
 * orderList API
 */
router.get("/orderList", function(req, res) {
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
/**
 * job API
 */
const job = {
    "/job": {
        post: function(req, res, next) {
            let id;
            if (Object.keys(req.body).indexOf("undefined") != -1) {
                if (req.query) {
                    id = req.query.id;
                }
            } else {
                id = req.body.id;
            }
            if (!/^[0-9]*$/.test(id)) {
                let info = {
                    err_no: 501,
                    errmsg: "id is not type number?"
                }
                res.status(501).send(info);
            } else {
                fs.readFile(path.resolve(__dirname, './json/job.json'), "utf-8", function(err, data) {
                    if (err) {
                        let info = {
                            err_no: 5501,
                            errmsg: JSON.stringify(err)
                        }
                        res.status(500).send(info);
                    } else {
                        let info = {
                            success_code: 200,
                            success_msg: "Successful get job!",
                            data: JSON.parse(data)
                        }
                        res.status(200).send(info);
                    }
                })
            }
        }
    },
    "/:id": {
        get: function(req, res, next) {
            const id = req.params.id;
            if (!/^[0-9]*$/.test(id)) {
                let info = {
                    err_no: 501,
                    errmsg: ":id is not type number?"
                }
                res.status(501).send(info);
            } else {
                fs.readFile(path.resolve(__dirname, './json/job.json'), "utf-8", function(err, data) {
                    if (err) throw err;
                    res.status(200).send(data)
                })
            }
        }
    }
}
app.map(job);

/**
 * user API
 */
router.post("/user", function(req, res, next) {
    if (Object.keys(req.body).indexOf("undefined") != -1) {
        if (req.query) {
            const name = req.query.name ? req.query.name : false;
            const age = req.query.age ? req.query.age : false;
            if (name && age) {
                res.status(200).send(req.query);
            } else {
                if (!name) {
                    let err = {
                        err_code: 404,
                        err_msg: 'cannot find age ' + age
                    }
                    res.status(404).send(err)
                }
                if (!age) {
                    let err = {
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
/**
 * upload API
 */
router.put('/upload', function(req, res, next) {
    upload(req, res, function(err) {
        // 错误提示
        if (err) {
            const errorMessages = {
                'LIMIT_PART_COUNT': 'Too many parts',
                'LIMIT_FILE_SIZE': 'File too large',
                'LIMIT_FILE_COUNT': 'Too many files',
                'LIMIT_FIELD_KEY': 'Field name too long',
                'LIMIT_FIELD_VALUE': 'Field value too long',
                'LIMIT_FIELD_COUNT': 'Too many fields',
                'LIMIT_UNEXPECTED_FILE': 'Unexpected field'
            }
            if (errorMessages.hasOwnProperty(err.code)) {
                let info = {
                    "err_code": 50001,
                    "err_sign": err.code,
                    "err_msg": errorMessages[err.code],
                }
                res.status(500).send(info);
            }
        } else {
            const files = req.files;
            if (files) {
                if (files.length > 0) {
                    if (files.length == 1) {
                        let info = {
                            success_code: 200,
                            success_msg: "upload successful!",
                            data: {
                                "path": files[0].fieldname + "/" + files[0].filename,
                                "size": files[0].size
                            }
                        }
                        res.status(200).send(info);
                    } else if (files.length > 1) {
                        let path = [];
                        let size = [];
                        for (let index = 0; index < files.length; index++) {
                            path.push(files[index].fieldname + "/" + files[index].filename);
                            size.push(files[index].size)
                        }
                        let info = {
                            success_code: 200,
                            success_msg: "upload successful!",
                            data: {
                                "path": path,
                                "size": size
                            }
                        }
                        res.status(200).send(info);
                    }
                } else if (files.length == 0) {
                    let info = {
                        "err_code": 50002,
                        "err_msg": "upload  files type is disable",
                    }
                    res.status(500).send(info);
                }

            } else {
                let info = {
                    "err_code": 50003,
                    "err_msg": "Upload files is empty",
                }
                res.status(500).send(info);
            }
        }

    })

});

module.exports = router;