const express = require("express");
const router = express.Router();
const app = express();
const https = require("https");
const verbose = process.env.NODE_ENV == 'development';
const qs = require("qs");
const _ = require('lodash');
/**
 *  object  create  API
 */
app.map = function(a, route) {
    route = route || '';
    for (let key in a) {
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
 * 首页详情 API
 */
app.map({
    "/info": {
        get: function(req, res, next) {
            const { query } = req;
            const { params } = req;
            let obj = {
                scheme: "https",
                APPOS_VERSION: "v3.9.1",
                page: 1
            };
            if (typeof query.page != "undefined") {
                obj.page = /^[0-9]*$/.test(query.page) && query.page > 0 ? query.page : 1;
            } else {
                if (typeof params.page != "undefined") {
                    obj.page = /^[0-9]*$/.test(params.page) && params.page > 0 ? params.page : 1;
                }
            };
            const options = {
                hostname: "m.yidoutang.com",
                port: 443,
                path: "/apiv3/recommend/homepage3700?" + qs.stringify(obj),
                method: "GET",
            }
            const hreq = https.request(options, (hres) => {
                let json = "";
                hres.setEncoding("utf-8");
                hres.on('data', (d) => {
                    json += d;
                });
                hres.on("end", function() {
                    try {
                        let data = JSON.parse(json);
                        let info = {
                            success_code: 200,
                            success_msg: "Successful get info!",
                            ...data
                        }
                        res.type("json").status(200).send(info);
                    } catch (error) {
                        let info = {
                            err_code: 400,
                            err_msg: error
                        }
                        res.type("json").status(400).send(info);
                        next(error);
                    }
                })

            });
            hreq.on('error', (e) => {
                console.error(e);
            });
            hreq.end();
        }
    }
});


/**
 * 全屋记
 */
app.map({
    "/new": {
        "/detail/:id*?": {
            get: function(req, res, next) {
                const { query } = req;
                const { params } = req;
                let id = null;
                if (typeof query.id != "undefined") {
                    id = /^[0-9]*$/.test(query.id) ? query.id : null;
                    if (!id) {
                        let info = {
                            "err_code": "-10001",
                            "err_msg": "参数id不符合规则",
                        }
                        res.type("json").status(401).send(info);
                    }
                } else {
                    if (typeof params.id != "undefined") {
                        id = /^[0-9]*$/.test(params.id) ? params.id : null;
                        if (!id) {
                            let info = {
                                "err_code": "-10001",
                                "err_msg": "参数id不符合规则",
                            }
                            res.type("json").status(401).send(info);
                        }
                    } else {
                        let info = {
                            "err_code": "-1",
                            "err_msg": "缺少参数id",
                        }
                        res.type("json").status(400).send(info);
                    }
                };
                if (id) {
                    let obj = {
                        scheme: "https",
                        APPOS_VERSION: "v4.8.7",
                        id: id,
                        comments_v2: "1"
                    }
                    const options = {
                        hostname: "m.yidoutang.com",
                        port: 443,
                        path: "/apiv3/newcase/detail?" + qs.stringify(obj),
                        method: "GET",
                    }
                    const hreq = https.request(options, (hres) => {
                        let json = "";
                        hres.setEncoding("utf-8");
                        hres.on('data', (d) => {
                            json += d;
                        });
                        hres.on("end", function() {
                            try {
                                let data = JSON.parse(json);
                                let info = {
                                    success_code: 200,
                                    success_msg: "Successful get new detail!",
                                    ...data
                                }
                                res.type("json").status(200).send(info);
                            } catch (error) {
                                let info = {
                                    err_code: 400,
                                    err_msg: error
                                }
                                res.type("json").status(400).send(info);
                                next(error);
                            }
                        })

                    });
                    hreq.on('error', (e) => {
                        console.error(e);
                    });
                    hreq.end();
                }
            },
        }
    }
});


/**
 * 文章
 */
app.map({
    "/master": {
        "/detail/:id*?": {
            get: function(req, res, next) {
                const { query } = req;
                const { params } = req;
                let id = null;
                if (typeof query.id != "undefined") {
                    id = /^[0-9]*$/.test(query.id) ? query.id : null;
                    if (!id) {
                        let info = {
                            "err_code": "-10001",
                            "err_msg": "参数id不符合规则",
                        }
                        res.type("json").status(401).send(info);
                    }
                } else {
                    if (typeof params.id != "undefined") {
                        id = /^[0-9]*$/.test(params.id) ? params.id : null;
                        if (!id) {
                            let info = {
                                "err_code": "-10001",
                                "err_msg": "参数id不符合规则",
                            }
                            res.type("json").status(401).send(info);
                        }
                    } else {
                        let info = {
                            "err_code": "-1",
                            "err_msg": "缺少参数id",
                        }
                        res.type("json").status(400).send(info);
                    }
                };
                if (id) {
                    let obj = {
                        scheme: "https",
                        APPOS_VERSION: "v4.8.7",
                        tid: id,
                        comments_v2: "1"
                    }
                    const options = {
                        hostname: "m.yidoutang.com",
                        port: 443,
                        path: "/apiv3/community/detailHtml?" + qs.stringify(obj),
                        method: "GET",
                    }
                    const hreq = https.request(options, (hres) => {
                        let json = "";
                        hres.setEncoding("utf-8");
                        hres.on('data', (d) => {
                            json += d;
                        });
                        hres.on("end", function() {
                            try {
                                let data = JSON.parse(json);
                                let info = {
                                    success_code: 200,
                                    success_msg: "Successful get master detail!",
                                    ...data
                                }
                                res.type("json").status(200).send(info);
                            } catch (error) {
                                let info = {
                                    err_code: 400,
                                    err_msg: error
                                }
                                res.type("json").status(400).send(info);
                                next(error);
                            }
                        })

                    });
                    hreq.on('error', (e) => {
                        console.error(e);
                    });
                    hreq.end();
                }
            },
        },
        "/decorate/:type*?": {
            get: function(req, res, next) {
                const { query } = req;
                const { params } = req;
                let type = null;
                if (typeof query.type != "undefined") {
                    if (_.isArray(query.type)) {
                        // 是否为数组 such as ?type=[2,4,5]
                        type = query.type.length > 0 ? query.type.toString() : null;
                    } else if (_.isString(query.type)) {
                        // 字符串类型：such as ?type=2,4,5
                        type = /[\S]+/.test(query.type) ? query.type : null;
                    }
                    if (!type) {
                        let info = {
                            "err_code": "-10001",
                            "err_msg": "参数type不符合规则",
                        }
                        res.type("json").status(401).send(info);
                    }
                } else {
                    if (typeof params.type != "undefined") {
                        if (_.isString(params.type)) {
                            const parseType = JSON.parse(params.type);
                            if (_.isArray(parseType)) {
                                // 是否为数组 such as /[2,4,5]
                                type = parseType.length > 0 ? parseType.toString() : null;
                            } else if (_.isString(parseType)) {
                                // 字符串类型：such as /2,4,5
                                type = parseType && /[\S]+/.test(parseType) ? parseType : null;
                            }
                        }
                        if (!type) {
                            let info = {
                                "err_code": "-10001",
                                "err_msg": "参数type不符合规则",
                            }
                            res.type("json").status(401).send(info);
                        }
                    } else {
                        let info = {
                            "err_code": "-1",
                            "err_msg": "缺少参数type",
                        }
                        res.type("json").status(400).send(info);
                    }
                }
                if (type) {
                    let obj = {
                        scheme: "https",
                        APPOS_VERSION: "v3.9.1",
                        type: type,
                        page: 1,
                    }
                    if (typeof query.page != "undefined") {
                        obj.page = /^[0-9]*$/.test(query.page) && query.page > 0 ? query.page : 1;
                    } else {
                        if (typeof params.page != "undefined") {
                            obj.page = /^[0-9]*$/.test(params.page) && params.page > 0 ? params.page : 1;
                        }
                    };
                    const options = {
                        hostname: "m.yidoutang.com",
                        port: 443,
                        path: "/apiv3/community/guide?" + qs.stringify(obj),
                        method: "GET",
                    }
                    const hreq = https.request(options, (hres) => {
                        let json = "";
                        hres.setEncoding("utf-8");
                        hres.on('data', (d) => {
                            json += d;
                        });
                        hres.on("end", function() {
                            try {
                                let data = JSON.parse(json);
                                let info = {
                                    success_code: 200,
                                    success_msg: "Successful get master decorate!",
                                    ...data
                                }
                                res.type("json").status(200).send(info);
                            } catch (error) {
                                let info = {
                                    err_code: 400,
                                    err_msg: error
                                }
                                res.type("json").status(400).send(info);
                                next(error);
                            }
                        })

                    });
                    hreq.on('error', (e) => {
                        console.error(e);
                    });
                    hreq.end();
                }
            }
        }
    }
});

/**
 * 众测
 */
app.map({
    "/zhongce": {
        "/list": {
            get: function(req, res, next) {
                const { query } = req;
                const { params } = req;
                let obj = {
                    scheme: "https",
                    APPOS_VERSION: "v3.9.1",
                    page: 1
                }
                if (typeof query.page != "undefined") {
                    obj.page = /^[0-9]*$/.test(query.page) && query.page > 0 ? query.page : 1;
                } else {
                    if (typeof params.page != "undefined") {
                        obj.page = /^[0-9]*$/.test(params.page) && params.page > 0 ? params.page : 1;
                    }
                };
                const options = {
                    hostname: "m.yidoutang.com",
                    port: 443,
                    path: "/apiv3/mtest/list?" + qs.stringify(obj),
                    method: "GET",
                }
                const hreq = https.request(options, (hres) => {
                    let json = "";
                    hres.setEncoding("utf-8");
                    hres.on('data', (d) => {
                        json += d;
                    });
                    hres.on("end", function() {
                        try {
                            let data = JSON.parse(json);
                            let info = {
                                success_code: 200,
                                success_msg: "Successful get zhongce  detail!",
                                ...data
                            }
                            res.type("json").status(200).send(info);
                        } catch (error) {
                            let info = {
                                err_code: 400,
                                err_msg: error
                            }
                            res.type("json").status(400).send(info);
                            next(error);
                        }
                    })

                });
                hreq.on('error', (e) => {
                    console.error(e);
                });
                hreq.end();
            }
        },
        "/detail/:id*?": {
            get: function(req, res, next) {
                const { query } = req;
                const { params } = req;
                let id = null;
                if (typeof query.id != "undefined") {
                    id = /^[0-9]*$/.test(query.id) ? query.id : null;
                    if (!id) {
                        let info = {
                            "err_code": "-10001",
                            "err_msg": "参数id不符合规则",
                        }
                        res.type("json").status(401).send(info);
                    }
                } else {
                    if (typeof params.id != "undefined") {
                        id = /^[0-9]*$/.test(params.id) ? params.id : null;
                        if (!id) {
                            let info = {
                                "err_code": "-10001",
                                "err_msg": "参数id不符合规则",
                            };
                            res.type("json").status(401).send(info);
                        };
                    } else {
                        let info = {
                            "err_code": "-1",
                            "err_msg": "缺少参数id",
                        };
                        res.type("json").status(400).send(info);
                    }
                };
                if (id) {
                    let obj = {
                        scheme: "https",
                        APPOS_VERSION: "v3.9.1",
                        id: id,
                    };
                    const options = {
                        hostname: "m.yidoutang.com",
                        port: 443,
                        path: "/apiv3/mtest/detail?" + qs.stringify(obj),
                        method: "GET",
                    };
                    const hreq = https.request(options, (hres) => {
                        let json = "";
                        hres.setEncoding("utf-8");
                        hres.on('data', (d) => {
                            json += d;
                        });
                        hres.on("end", function() {
                            try {
                                let data = JSON.parse(json);
                                let info = {
                                    success_code: 200,
                                    success_msg: "Successful get zhongce list detail!",
                                    ...data
                                };
                                res.type("json").status(200).send(info);
                            } catch (error) {
                                let info = {
                                    err_code: 400,
                                    err_msg: error
                                };
                                res.type("json").status(400).send(info);
                                next(error);
                            }
                        })

                    });
                    hreq.on('error', (e) => {
                        console.error(e);
                    });
                    hreq.end();
                }
            }
        }
    },
    "/similar": {
        "/list": {
            get: function(req, res, next) {
                const { query } = req;
                const { params } = req;
                let obj = {
                    scheme: "https",
                    APPOS_VERSION: "v3.9.1",
                    page: 1
                };
                if (typeof query.page != "undefined") {
                    obj.page = /^[0-9]*$/.test(query.page) && query.page > 0 ? query.page : 1;
                } else {
                    if (typeof params.page != "undefined") {
                        obj.page = /^[0-9]*$/.test(params.page) && params.page > 0 ? params.page : 1;
                    }
                };
                const options = {
                    hostname: "m.yidoutang.com",
                    port: 443,
                    path: "/apiv3/mtest/allarticles?" + qs.stringify(obj),
                    method: "GET",
                };
                const hreq = https.request(options, (hres) => {
                    let json = "";
                    hres.setEncoding("utf-8");
                    hres.on('data', (d) => {
                        json += d;
                    });
                    hres.on("end", function() {
                        try {
                            let data = JSON.parse(json);
                            let info = {
                                success_code: 200,
                                success_msg: "Successful get allarticles list!",
                                ...data
                            };
                            res.type("json").status(200).send(info);
                        } catch (error) {
                            let info = {
                                err_code: 400,
                                err_msg: error
                            };
                            res.type("json").status(400).send(info);
                            next(error);
                        }
                    });

                });
                hreq.on('error', (e) => {
                    console.error(e);
                });
                hreq.end();
            }
        }
    },
})




module.exports = router;