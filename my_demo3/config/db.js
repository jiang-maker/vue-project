const config = {
  database: 'server',
  username: 'root',
  password: 'root',
  options:{
    host    : 'localhost',
    dialect : 'mysql',
    pool    : {
      max   :  5,
      min   :  0,
      idle  :  10000
    },
    define: {
      timestamps: false, // 默认不加时间戳
      freezeTableName: true // 表名默认不加 s
    },
    timezone: '+08:00'
  }
}
module.exports = config
