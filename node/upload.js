const path = require('path');
const multer = require('multer');
// 日期转换工具
const moment = require('moment');
// 转换年月日
const timepath = moment().format('YYYY-MM-DD');
// 时间戳
const timestamp = +new Date();
//uuid工具可以生成唯一标示
const uuid = require('uuid');
// 文件大小
const imageLimit = {
    fileSize: 2 * 1024 * 1000,
}
const storage = multer.diskStorage({
    //destination：字段设置上传路径，可以为函数
    destination: path.resolve(__dirname, '../upload/' + timepath),

    //filename：设置文件保存的文件名
    filename: function(req, file, cb) {
        let extName = timestamp + '.' + file.originalname.split('.')[1];
        let fileName = uuid.v1();
        cb(null, fileName + extName);
    }
});
const imageFilter = function(req, file, cb) {
        var acceptableMime = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif']
            //只接收上述四种类型的图片
        if (acceptableMime.indexOf(file.mimetype) !== -1) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
    //创建 multer 实例
    //muilter.single("字段"),单文件上传
    //muilter.array("字段",数量), 多文件上传
    // muilter.fields("字段"), 混合上传
const imageUploader = multer({
    storage: storage,
    fileFilter: imageFilter,
    limits: imageLimit
}).array('upload', 9); //定义表单字段、数量限制
module.exports = imageUploader;