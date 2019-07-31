const mongoose = require('mongoose');

//定义用户的数据格式
const bannerSchema = new mongoose.Schema({
    title: String, //图片标题标题
    description: String, //图片描述内容
    createAt:{     //发表时间
        type:Date,
        default:new Date,
    },
    url:String
});

//暴露用户的模型
module.exports = mongoose.model('banners',bannerSchema);

