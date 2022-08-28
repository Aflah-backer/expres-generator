var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // DATABASE CODE

  const values=['Ranjith','basim','aneeb','amal']

  const person={name:"Aflah",comments:{comment:"This is a comment",date:"07-08-2020"}}


  res.render('index',{person});
});

module.exports = router;
