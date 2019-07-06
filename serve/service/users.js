const Users = require('../models/users')
// const jwt = require('jsonwebtoken')

module.exports = {
  //查询所有用户
  showAllUsers: async ( ctx ) => {
    let result = await Users.find();
    ctx.body = result
  },
  //注册
  reg: async ( ctx ) => {
    let user = ctx.request.body.data;
    let result = {
      success: false,
      data: null,
      message: ""
    }
    let existOne = await Users.findOne( {username: user.username} )
    if( existOne ){
      result.message = "用户已存在,请重新注册"
      ctx.body = result
      return 
    }
    let userresult = await new Users( user ).save();
    console.log( userresult );
    result.success = true;
    result.message = "注册成功";
    ctx.body = result
  },
  //登录
  login: async ( ctx ) => {
    let user = ctx.request.body.data;
    let result = {
      success: false,
      data: null,
      message: "",
      token:null
    };
    let userResult = await Users.findOne({username: user.username});
    console.log( userResult )
    if( userResult ){
      if ( user.username === userResult.username ) {
        result.success = true;
        result.message = "登录成功";
        result.data = userResult;
        // result.token = jwt.sign({
        //   id: userResult._id,
        //   username: userResult.username
        // },"my_token",{ expiresIn: '2h'});
      } else {
        result.message = "用户名或密码不正确";
      }
    } else {
      result.message = "用户不存在,请先注册";
    }
    ctx.body = result;
  },
  //根据 username 查询用户
  findOneByName: async ( ctx ) => {
    let { name } = ctx.params;
    let result = {
      success: false,
      data: null,
      message: ""
    };
    let userResult = await Users.findOne( {username: name} );
    if ( userResult ){
      result.data = userResult;
      result.success = true;
      result.message = "操作成功";
    } else{
      result.success = false;
      result.message = "未找到";
    }
    result.data = userResult;
    result.success = true;
    result.message = "查询成功";
    ctx.body = result;
  },
  //删除指定用户
  deleteOneByName: async ( ctx ) => {
    let { name } = ctx.params;
    console.log( name )
    let result = {
      success: false,
      data: null,
      message: ""
    };
    let userResult = await Users.remove( {username: name} );
    result.data = userResult;
    result.success = true;
    result.message = `操作成功,共删除 ${userResult.n} 条数据`;
    ctx.body = result;
  }
}