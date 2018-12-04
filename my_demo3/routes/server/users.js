var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'server'
});
connection.connect();

/* Post method for users listening. */
router.post('/userinfo', function (req, res, next) {
  console.log('请求信息为：');
  console.log(req.body);
  res.json({
    meta:{
      code: '200'
    },
    data: {
      message:'dfasdfsfs'
    }
  })
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
