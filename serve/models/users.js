const mongoose = require('mongoose');

//定义用户的数据格式
const userSchema = new mongoose.Schema({
    username:String,  //用户名
    password:String,  //密码
    email:String,     //邮箱
    uid:String,        //学号
    createAt: {        //创建时间
        type: Date,
        default: Date.now
    },
    isAdmin:{         //是否是管理员
        type:Boolean,
        default:false,
    },
    pic_url:String
});

//暴露用户的模型
module.exports = mongoose.model('users',userSchema);

