const db = require('../util/db')

module.exports = {

  /**
   * 创建用户
   * @param {object} model 用户数据模型
   * @return {object} sql结果
   */
  create: async ( model ) => {
    let result = await db.insertData( 'users', model )
    return result
  },

  /**
   * 通过 name 查找用户
   * @param {name} name 用户姓名
   * @return {object | null} sql结果
   */
  getUserByName: async ( name ) => {
    let _sql = `select * from users where name="${name}"`
    let result = await db.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  /**
   * 通过 name And password 查找用户
   * @param {object} model 用户模型
   * @return {object | null} sql结果
   */
  getUserByNameAndPassword: async ( model ) => {
    let _sql = `
    select * from users 
    where name = "${model.name}" 
    and password = "${model.password}" 
    limit 1`
    let result = await db.query( _sql )
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

  /**
   * 查询 users 表中所有数据
   * @param { null }
   * @return {object | null} sql结果
   */
  getAllUsers: async (  ) => {
    let result = await db.selectDataAll( 'users' )
    return result
  }
}