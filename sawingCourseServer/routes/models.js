var express = require('express');
var router = express.Router();
var ModelModel = require('../model/model');
var connection = require('../data/database');


router.get('/', function(req, res) {
    ModelModel.find({}, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.send(JSON.stringify(data));
    }
  })
});


router.post('/', function(req, res, next){
  var s = new ModelModel({
    id: req.body.id,
    picture: req.body.picture
  });
  s.save().then(()=>console.log('Model was saved in DB'));
  next();
})

router.put('/', function(req, res, next){
    ModelModel.findOneAndUpdate({id:req.body.id}, {$set: {picture:req.body.picture}}, (err, doc)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(`Model was updated to: ${doc}`);
    }
  })
  next();
})

router.delete('/', function(req, res, next){
    ModelModel.findOneAndDelete({id: req.body.id}, (err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('Model was deleted');
    }
  })
  next();
})

module.exports = router;
