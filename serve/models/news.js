const mongoose = require('mongoose');

//定义用户的数据格式
const newsSchema = new mongoose.Schema({
    title: String, //新闻标题
    html: String, //新闻内容
    summary: String, //新闻摘要
    createAt:{     //发表时间
        type:Date,
        default:new Date,
    },
    views:{   //阅读量
        type:Number,
        default:0,
    }
});
newsSchema.index({createAt: -1});

//暴露用户的模型
module.exports = mongoose.model('news',newsSchema);

