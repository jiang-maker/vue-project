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

/* GET users listing. */
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
module.exports = router;
