const mysql =  require('mysql')
const {db:{host,user,password,database}} = require('../config')

const pool = mysql.createPool({
  host,
  user,
  password,
  database
});

let query = ( sql, values ) => {
  return new Promise(( resolve, reject ) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows ) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          connection.release()
        })
      }
    })
  })
};

module.exports = {
  query,
  /**
   * 插入数据
   * @param {string} table  表名
   * @param {object} values 数据
   * @return {object} sql结果
   */
  insertData: ( table, values ) => {
    let _sql = "insert into ?? set ?"
    return query( _sql, [ table, values ] )
  },

  /**
   * 查询表中所有数据
   * @param {string} tabel 表名
   * @return sql结果
   */
  selectDataAll: ( table ) => {
    let _sql = "select * from ??"
    return query( _sql, [ table ])
  },

  /**
   * 通过 ID 查询表中数据
   * @param {string} table 表名
   * @param {int} id id值
   * @return sql结果 
   */
  selectDataById: ( table, id) => {
    let _sql = "select * from ?? where id = ?"
    return query( _sql, [ table, id])
  },

  /**
   * 通过 name 查询表中数据
   * @param {string} table 表名
   * @param {string} name 名字
   * @return sql结果 
   */
  selectDataByName: ( table, name) => {
    let _sql = "select * from ?? where name = ??"
    return query( _sql, [ table, name] )
  },
  
  /**
   * 更新记录
   * @param {string} table 表名
   * @param {object} values 数据
   * @param {int} id id值
   * @return sql结果
   */
  updateData: ( table, values, id) => {
    let _sql = "update ?? set ? where id = ?"
    return query( _sql, [ table, values, id])
  },

  /**
   * 通过 ID 删除记录
   * @param {string} tabel 表名
   * @param {id} id id值
   * @return 删除结果
   */
  deleteDataById: ( table, id) => {
    let _sql = "delete from ?? where id = ?"
    return query( _sql )
  }
  

};
