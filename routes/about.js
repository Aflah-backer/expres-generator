var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // DATABASE CODE


  res.render('about', {value:'im about'});
});

module.exports = router;
