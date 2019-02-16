var express = require('express');
var router = express.Router();
var linkModel=require('../models/linkModel');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('get-link');
});
router.get('/:code', function(req, res, next) {
 var code=req.params.code;
 var query={
   state:false,
   link:code
 };
 linkModel.findOne(query,(err,result)=>{
if(result){
  res.render('fail');
  return;
}
else {
  linkModel.updateOne({link:code}, {$set: { state: false }}, {upsert: true}, (err)=>{
    if(err){
      console.log(err);
    }
    else {
      res.render('success');
      console.log('Update success!');
      res.render('success')
    }
  })

}
})
  

});
router.post('/', function(req, res, next) {
  var query={
    state:true
  }
  linkModel.findOne(query,(err,result)=>{
    res.redirect('/'+result.link);
  })
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
    link:createLink(),
    state:true
  })
  link.save((err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('Save success');
    }
  })
res.end(createLink());
});


module.exports = router;
