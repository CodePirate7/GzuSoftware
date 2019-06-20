const Users = require('../models/users') 
const jwt = require('jsonwebtoken')

module.exports = {
   
  login: async ( ctx ) => {
    let user = ctx.request.body.data
    let result = {
      success: false,
      data: null,
      message: "",
      token:null
    }
    let userResult = await Users.getUserByNameAndPassword(user)
    console.log( userResult )
    if( userResult ){
      if ( user.name === userResult.name ) {
        result.success = true
        result.message = "登录成功"
        result.token = jwt.sign({
          id: userResult.id,
          name: userResult.name
        },"my_token",{ expiresIn: '2h'})
        result.data = {
          id: userResult.id,
          name: userResult.name
        }
      } else {
        result.message = "用户名或密码不正确"
      }
    } else {
      result.message = "用户不存在,请先注册"
    }
    if( result.success ){
      
    }
    ctx.body = result
  },

  reg: async ( ctx ) => {
    let user = ctx.request.body.data
    let result = {
      success: false,
      data: null,
      message: ""
    }
    let existOne = await Users.getUserByName( user )
    if( existOne ){
      result.message = "用户已存在,请重新注册"
      ctx.body = result
      return 
    }
    let userResult = await Users.create({
      email: user.mail,
      password: user.password,
      name: user.name,
      create_time: new Date().getTime(),
      level: 1,
    })
    result.success = true
    result.message = "注册成功"
    ctx.body = result
  },

  user: async ( ctx ) => {
    let result = {
      success: false,
      data: null,
      message: "",
      total: 0
    };
    let userResult = await Users.getAllUsers();
    result.data = userResult;
    result.total = userResult.length;
    result.success = true;
    result.message = "查询成功"
    ctx.body = result;
  },

  findOneByName: async ( ctx ) => {
    //获取动态路由传值
    let { name } = ctx.params;
    let result = {
      success: false,
      data: null,
      message: ""
    };
    let userResult = await Users.getUserByName( name );
    result.data = userResult;
    result.success = true;
    result.message = "查询成功"
    ctx.body = result;
  }

};