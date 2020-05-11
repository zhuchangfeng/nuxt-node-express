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
app.map = function (a, route) {
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
 * 
 * @param {object} options 
 * @param {object} data 
 * @description https req
 */
const reqData = (options, data) => {
    return function (req, res, next) {
        if (typeof options != "object") {
            let info = {
                err_code: -1,
                err_msg: "options must be a object!"
            }
            res.type("json").status(500).send(info);
        } else {
            const { success, error } = data;
            if (success?.code) {
                const request = https.request(options, (response) => {
                    let json = "";
                    response.setEncoding("utf-8");
                    response.on('data', (d) => {
                        json += d;
                    });
                    response.on('end', () => {
                        try {
                            let data = JSON.parse(json);
                            let info = {
                                success_code: success.code,
                                success_msg: success?.message ?? "",
                                ...data
                            }
                            res.type("json").status(success.code).send(info);
                        } catch (e) {
                            if (error?.code) {
                                let info = {
                                    err_code: error?.code,
                                    err_msg: error?.message ?? e
                                }
                                res.type("json").status(success.code).send(info);
                                next(e);
                            }
                        }
                    })
                });
                request.on('error', (e) => {
                    console.error(e);
                });
                request.end();
            }
        }

    }
}

/**
 * 首页详情 API
 */
app.map({
    "/info": {
        get: (req, res, next) => {
            const { query } = req;
            let obj = {
                scheme: "https",
                APPOS_VERSION: "v3.9.1",
                page: 1
            };
            if (/^[0-9]*$/.test(query.page)) {
                obj.page = query.page > 0 ? query.page : 1;
            };
            const options = {
                hostname: "m.yidoutang.com",
                port: 443,
                path: "/apiv3/recommend/homepage3700?" + qs.stringify(obj),
                method: "GET",
            };
            reqData(options, {
                success: { code: 200, message: "successful get info!" },
                error: {
                    code: 400
                }
            })(req, res, next);
        }
    }
});


/**
 * 全屋记
 */
app.map({
    "/new": {
        "/detail/:id*?": {
            get: (req, res, next) => {
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
                    reqData(options, {
                        success: { code: 200, message: "successful get new detail!" },
                        error: {
                            code: 400
                        }
                    })(req, res, next);
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
            get: (req, res, next) => {
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
                    reqData(options, {
                        success: { code: 200, message: "successful get master detail!" },
                        error: {
                            code: 400
                        }
                    })(req, res, next);
                }
            },
        },
        "/decorate/:type*?": {
            get: (req, res, next) => {
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
                    if (/^[0-9]*$/.test(query.page)) {
                        obj.page = query.page > 0 ? query.page : 1;
                    };
                    const options = {
                        hostname: "m.yidoutang.com",
                        port: 443,
                        path: "/apiv3/community/guide?" + qs.stringify(obj),
                        method: "GET",
                    };
                    reqData(options, {
                        success: { code: 200, message: "successful get master decorate!" },
                        error: {
                            code: 400
                        }
                    })(req, res, next);
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
            get: (req, res, next) => {
                const { query } = req;
                let obj = {
                    scheme: "https",
                    APPOS_VERSION: "v3.9.1",
                    page: 1
                }
                if (/^[0-9]*$/.test(query.page)) {
                    obj.page = query.page > 0 ? query.page : 1;
                };
                const options = {
                    hostname: "m.yidoutang.com",
                    port: 443,
                    path: "/apiv3/mtest/list?" + qs.stringify(obj),
                    method: "GET",
                }
                reqData(options, {
                    success: { code: 200, message: "successful get zhongce  detail!" },
                    error: {
                        code: 400
                    }
                })(req, res, next);
            }
        },
        "/detail/:id*?": {
            get: (req, res, next) => {
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
                    reqData(options, {
                        success: { code: 200, message: "successful get zhongce list detail!" },
                        error: {
                            code: 400
                        }
                    })(req, res, next);
                }
            }
        }
    },
    "/similar": {
        "/list": {
            get: (req, res, next) => {
                const { query } = req;
                let obj = {
                    scheme: "https",
                    APPOS_VERSION: "v3.9.1",
                    page: 1
                };
                if (/^[0-9]*$/.test(query.page)) {
                    obj.page = query.page > 0 ? query.page : 1;
                };
                const options = {
                    hostname: "m.yidoutang.com",
                    port: 443,
                    path: "/apiv3/mtest/allarticles?" + qs.stringify(obj),
                    method: "GET",
                };
                reqData(options, {
                    success: { code: 200, message: "successful get allarticles list!" },
                    error: {
                        code: 400
                    }
                })(req, res, next);
            }
        }
    },
});

// 图册
app.map({
    // 图册标签
    "/photo": {
        "/activitetags": {
            get: (req, res, next) => {
                const { query } = req;
                let obj = {
                    scheme: "https",
                    APPOS_VERSION: "v3.9.1",
                    space: "", //空间
                    style: "", //风格
                    part: "", //硬装
                    soft: "", //软装
                    order: "0", //排序
                    sharing: "0", //有购物单
                };
                obj.space = query.space !== "0" ? query.space : "";
                obj.style = query.style !== "0" ? query.style : "";
                obj.part = query.part !== "0" ? query.part : "";
                obj.soft = query.soft !== "0" ? query.soft : "";
                obj.order = /^[0-9]*$/.test(query.order) ? query.order == "0" || query.order == "1" ? query.order : "0" : "0";
                obj.sharing = /^[0-9]*$/.test(query.sharing) ? query.sharing == "0" || query.sharing == "1" ? query.sharing : "0" : "0";
                const options = {
                    hostname: "m.yidoutang.com",
                    port: 443,
                    path: "/apiv3/photo/activitetags?" + qs.stringify(obj),
                    method: "GET",
                };
                reqData(options, {
                    success: { code: 200, message: "successful get photo activitetags!" },
                    error: {
                        code: 400
                    }
                })(req, res, next);
            }
        },
        "/getsimilar/:id*?": {
            get: (req, res, next) => {
                const { query } = req;
                const { params } = req;
                let match_id = null;
                if (typeof query.match_id != "undefined") {
                    match_id = /^[0-9]*$/.test(query.match_id) ? query.match_id : null;
                    if (!match_id) {
                        let info = {
                            "err_code": "-10001",
                            "err_msg": "参数id不符合规则",
                        }
                        res.type("json").status(401).send(info);
                    }
                } else {
                    if (typeof params.id != "undefined") {
                        match_id = /^[0-9]*$/.test(params.id) ? params.id : null;
                        if (!match_id) {
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
                if (match_id) {
                    let obj = {
                        scheme: "https",
                        APPOS_VERSION: "v4.8.7",
                        match_id: match_id,
                        page: 1
                    };
                    if (/^[0-9]*$/.test(query.page)) {
                        obj.page = query.page > 0 ? query.page : 1;
                    };
                    const options = {
                        hostname: "m.yidoutang.com",
                        port: 443,
                        path: "/apiv3/photo/getsimilar?" + qs.stringify(obj),
                        method: "GET",
                    };
                    reqData(options, {
                        success: { code: 200, message: "successful get photo getsimilar list!" },
                        error: {
                            code: 400
                        }
                    })(req, res, next);
                }

            }
        }
    },
    "/album": {
        get: (req, res, next) => {
            const { query } = req;
            let obj = {
                scheme: "https",
                APPOS_VERSION: "v3.9.1",
                space: "", //空间
                style: "", //风格
                part: "", //硬装
                soft: "", //软装
                order: "0", //排序
                sharing: "0", //有购物单
                page: 1, //页面
            };
            if (/^[0-9]*$/.test(query.page)) {
                obj.page = query.page > 0 ? query.page : 1;
            };
            obj.space = query.space !== "0" ? query.space : "";
            obj.style = query.style !== "0" ? query.style : "";
            obj.part = query.part !== "0" ? query.part : "";
            obj.soft = query.soft !== "0" ? query.soft : "";
            obj.order = /^[0-9]*$/.test(query.order) ? query.order == "0" || query.order == "1" ? query.order : "0" : "0";
            obj.sharing = /^[0-9]*$/.test(query.sharing) ? query.sharing == "0" || query.sharing == "1" ? query.sharing : "0" : "0";
            const options = {
                hostname: "m.yidoutang.com",
                port: 443,
                path: "/apiv3/case/album?" + qs.stringify(obj),
                method: "GET",
            };
            reqData(options, {
                success: { code: 200, message: "successful get album list!" },
                error: {
                    code: 400
                }
            })(req, res, next);
        },
        "/detail/:id*?": {
            get: ((req, res, next) => {
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
                        APPOS_VERSION: "v4.8.7",
                        match_id: id,
                    };
                    const options = {
                        hostname: "m.yidoutang.com",
                        port: 443,
                        path: "/apiv4/album/detail?" + qs.stringify(obj),
                        method: "GET",
                    };
                    reqData(options, {
                        success: { code: 200, message: "successful get album  detail!" },
                        error: {
                            code: 400
                        }
                    })(req, res, next);
                }
            })
        }
    }
})




module.exports = router;