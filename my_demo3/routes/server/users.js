var express = require('express');
var router = express.Router();
var modules = require('../../models')
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'root',
//   database:'server'
// });
// connection.connect();

/* Post method for users listening. */
router.post('/userinfo', function (req, res, next) {
  console.log('请求信息为：');
  console.log(req.body);
  // res.json({
  //   meta:{
  //     code: '200'
  //   },
  //   data: {
  //     message:'dfasdfsfs'
  //   }
  // })
  const user = await modules.User.create({
    username: '小张',
    password: 'root',
    createAt: now,
    updateAt: now,
  })
  console.log('创建：' + JSON.stringify(user))
})
/* GET users listening. address:localhost:3000/users/test */
router.get('/test', function (req, res, next) {
  res.json({
    meta:{
      code: '200'
    },
    data: {
      message:'dfasdfsfs'
    }
  })
})
module.exports = router;
