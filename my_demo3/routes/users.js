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
router.get('/', function(req, res, next) {
  console.log('object');
  res.send('respond with a resource');
});
router.get('/regist', function(req, res, next) {
  console.log(req);
  // var a_usr = {name:'test',pwd:'123456'}
  // console.log('object');
  connection.query('INSERT INTO user SET ?', req, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: 123test');
  });
  res.send('The solution is: ' + results[0].solution);
});
module.exports = router;
