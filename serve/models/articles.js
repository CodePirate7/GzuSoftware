const mongoose = require('mongoose');

//定义用户的数据格式
const articleSchema = new mongoose.Schema({
    title: String, //文章标题
    content: String, //文章内容
    summary: String, //文章摘要
    value:String, //渲染后的文章内容
    type: String,
    author:{        //作者
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    comment:{       //评论
        type:Array,
        default:[]
    },
    createAt:{     //发表时间
        type:Date,
        default:new Date,
    },
    views:{   //阅读量
        type:Number,
        default:0,
    }
});

//暴露用户的模型
module.exports = mongoose.model('articles',articleSchema);

