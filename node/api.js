const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const _ = require('lodash');
const upload = require("./upload");
const verbose = process.env.NODE_ENV == 'development';
const createToken = require("./middleware/createToken");
const app = express();
const https = require("https");
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
    console.log(req.headers, '55555');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", '3.2.1');
    res.header("Content-Type", 'application/x-www-form-urlencoded;charset=utf-8');
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
<<<<<<< HEAD
            let obj = {};
            if (Object.keys(req.body).length > 0) {
                obj.limit = /^[0-9]*$/.test(req.body.limit) ? req.body.limit : 10;
                obj.offset = /^[0-9]*$/.test(req.body.offset) ? req.body.offset : 0;
                obj.orgId = req.body.orgId ? req.body.orgId : false;
                obj.siteId = req.body.siteId ? req.body.siteId : false;
                req.body.zhinengId ? obj.zhinengId = req.body.zhinengId : delete obj.zhinengId;
                req.body.keyword ? obj.keyword = req.body.keyword : delete obj.keyword;
            } else {
                if (req.query) {
                    obj.limit = /^[0-9]*$/.test(req.query.limit) ? req.query.limit : 10;
                    obj.offset = /^[0-9]*$/.test(req.query.offset) ? req.query.offset : 0;
                    obj.orgId = req.query.orgId ? req.query.orgId : false;
                    obj.siteId = req.query.siteId ? req.query.siteId : false;
                    req.query.zhinengId ? obj.zhinengId = req.query.zhinengId : delete obj.zhinengId;
                    req.query.keyword ? obj.keyword = req.query.keyword : delete obj.keyword;
                }
            }
            if (obj.orgId && obj.siteId) {
                let url = "https://app.mokahr.com/api/apply/jobs?";
                Object.keys(obj).forEach(function(item, index) {
                    if (obj.hasOwnProperty(item)) {
                        const element = obj[item];
                        if ((Object.keys(obj).length - 1) - index > 0) {
                            url += item + "=" + element + "&";
                        } else {
                            url += item + "=" + element;
                        }

                    }
                });
                https.get(url, (r) => {
=======
            let limit, zhinengId, orgId, offset, keyword;
            if (Object.keys(req.body).length > 0) {
                limit = /^[0-9]*$/.test(req.body.limit) ? req.body.limit : 10;
                offset = /^[0-9]*$/.test(req.body.offset) ? req.body.offset : 0;
                zhinengId = req.body.zhinengId ? req.body.zhinengId : '';
                orgId = req.body.orgId ? req.body.orgId : false;
                siteId = req.body.siteId ? req.body.siteId : false;
            } else {
                if (req.query) {
                    limit = /^[0-9]*$/.test(req.query.limit) ? req.query.limit : 10;
                    offset = /^[0-9]*$/.test(req.query.offset) ? req.query.offset : 0;
                    zhinengId = req.query.zhinengId ? req.query.zhinengId : '';
                    orgId = req.query.orgId ? req.query.orgId : false;
                    siteId = req.query.siteId ? req.query.siteId : false;
                }
            }
            if (orgId && siteId) {
                https.get(`https://app.mokahr.com/api/apply/jobs?limit=${limit}&zhinengId=${zhinengId}&orgId=${orgId}&offset=${offset}&siteId=${siteId}`, (r) => {
>>>>>>> 14b296b415c006d35816eabdb99498f69328bafb
                    let json = "";
                    r.setEncoding("utf-8");
                    r.on('data', (d) => {
                        json += d;
                    });
                    r.on("end", function() {
                        try {
                            var data = JSON.parse(json);
<<<<<<< HEAD
                            data.jobStats["limit"] = obj.limit;
                            data.jobStats["offset"] = obj.offset;
                            let info = {
                                success_code: 200,
                                success_msg: "Successful post job!",
=======
                            data.jobStats["limit"] = limit;
                            data.jobStats["offset"] = offset;
                            let info = {
                                success_code: 200,
                                success_msg: "Successful get job test !",
>>>>>>> 14b296b415c006d35816eabdb99498f69328bafb
                                data: data
                            }
                            res.status(200).send(info);
                        } catch (error) {
                            let info = {
                                err_no: 400,
                                err_msg: error
                            }
                            res.status(400).send(info);
                        }
                    })
                }).on('error', (e) => {
                    console.error(e);
                });
            } else {
<<<<<<< HEAD
                if (!obj.orgId) {
=======
                if (!orgId) {
>>>>>>> 14b296b415c006d35816eabdb99498f69328bafb
                    let info = {
                        "err_code": -1,
                        "err_msg": "参数缺失orgId",
                    }
                    res.status(401).send(info);
                }
<<<<<<< HEAD
                if (!obj.siteId) {
=======
                if (!siteId) {
>>>>>>> 14b296b415c006d35816eabdb99498f69328bafb
                    let info = {
                        "err_code": -1,
                        "err_msg": "参数缺失siteId",
                    }
                    res.status(401).send(info);
<<<<<<< HEAD
                }
            }
        },
        "/detail": {
            get: function(req, res, next) {
                const { query } = req;
                if (query.id) {
                    const href = `https://app.mokahr.com/api/apply/zhihu/job/${query.id}?site=campus&orgId=zhihu&siteId=3818`
                    https.get(href, (r) => {
                        let json = "";
                        r.setEncoding("utf-8");
                        r.on('data', (d) => {
                            json += d;
                        });
                        r.on('end', function() {
                            try {
                                var data = JSON.parse(json);
                                let info = {
                                    success_code: 200,
                                    success_msg: "Successful get job details!",
                                    data: data
                                }
                                res.status(200).send(info);
                            } catch (error) {
                                let info = {
                                    err_no: 400,
                                    err_msg: error
                                }
                                res.status(400).send(info);
                            }
                        })
                    })
                } else {
                    let info = {
                        "err_code": -1,
                        "err_msg": "id参数缺少",
                    }
                    res.status(401).send(info);
=======
>>>>>>> 14b296b415c006d35816eabdb99498f69328bafb
                }
            }

        },
    }
}
app.map(job);

/**
 * user API
 */
router.post("/user", function(req, res, next) {
<<<<<<< HEAD
=======
    console.log(res);
>>>>>>> 14b296b415c006d35816eabdb99498f69328bafb
    if (Object.keys(req.body).length > 0) {
        res.status(200).send(req.body);
    } else {
        if (req.query) {
            const name = req.query.name ? req.query.name : false;
            const age = req.query.age ? req.query.age : false;
            if (name && age) {
                let info = {
                    success_code: 200,
                    success_msg: "Successful get job!",
                    data: {
                        token: createToken(req.query)
                    }
                }
                res.status(200).send(info);
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
