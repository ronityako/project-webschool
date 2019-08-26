var express = require('express');
var router = express.Router();
var GroupModel = require('../model/group');
var connection = require('../data/database');


router.get('/', function(req, res) {
  GroupModel.find({}, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.send(JSON.stringify(data));
    }
  })
});

router.get('/:id', function(req, res, next){
    GroupModel.findOne({id:req.params.id}, function(err, data){
      if(err){
        console.log(err)
      }
      else{
        res.send(data)
      }
    })
});

router.post('/', function(req, res, next){
  var s = new GroupModel({
    id: req.body.id, 
    name: req.body.name, 
    day: req.body.day,
    maxStudents: req.body.maxStudents
  })
  s.save().then(()=>console.log('Group was saved in DB'));
  next();
})

router.put('/', function(req, res, next){
  GroupModel.findOneAndUpdate({name:req.body.oldName}, {$set: {name:req.body.newName}}, (err, doc)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(`Group was updated to: ${doc}`);
    }
  })
  next();
})

router.delete('/', function(req, res, next){
  GroupModel.findOneAndDelete({id: req.body.id}, (err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('Group was deleted');
    }
  })
  next();
})

module.exports = router;
