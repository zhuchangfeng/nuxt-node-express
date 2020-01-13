import request from '../service/request';
import qs from 'qs';

function jsonProp(obj) {
    // type check
    if (!obj || (typeof obj !== 'object')) {
        return obj;
    }
    Object.keys(obj).forEach((key) => {
        if ((typeof obj[key]) === 'object') {
            obj[key] = JSON.stringify(obj[key])
        }
    });
    return obj;
}

function createObj(obj) {
    const toString = Object.prototype.toString;
    if (toString.call(obj) == "[object Object]") {
        const { params, data, ...other } = obj;
        const back = Object.assign(
            data ? {
                data: toString.call(data) == "[object Object]" ?
                    qs.stringify(jsonProp(data)) : jsonProp(data)
            } : params ? { params: params } : {}, other);
        return back;
    }
    return {};
}

export const getJson = (obj) => request({
    method: "GET",
    ...createObj(obj)
});

export const getStatic = (obj) => request({
    method: "GET",
    ...createObj(obj)
});
export const getStudent = () => request({
    method: "GET",
    url: "/student"
});
export const postUser = (obj) => request({
    url: "/user",
    method: "POST",
    ...createObj(obj)
})

export const getUser = () => request({
    url: "/users"
});

export const postJob = (obj) => request({
    url: "/job",
    method: "POST",
    ...createObj(obj)
});
export const getJobD = (obj) => request({
    url: "/job/detail",
    method: "GET",
    ...createObj(obj)
});
export const upload = (obj) => request({
    url: "/upload",
    method: "PUT",
    ...createObj(obj)
})