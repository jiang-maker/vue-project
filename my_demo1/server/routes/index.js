var express = require('express');
var router = express.Router();
var connection = require('../config/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
  connection.connect()

  connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
  })
  res.json({
    meta:{
      code: '200'
    },
    data: {
      message:'dfasdfsfs'
    }
  })
  connection.end()
})
module.exports = router;
