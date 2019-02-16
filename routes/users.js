var express = require('express');
var router = express.Router();
var linkModel=require('../models/linkModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
function createLink() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

router.get('/add', function(req, res, next) {
  var link=new linkModel({
    link:'',
    state:true
  })
console.log(createLink());
});

module.exports = router;
