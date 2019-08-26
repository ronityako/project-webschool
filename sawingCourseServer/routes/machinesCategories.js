var express = require('express');
var router = express.Router();
var MachinesCategoryModel = require('../model/machinesCategory');
var connection = require('../data/database');


router.get('/', function(req, res) {
    MachinesCategoryModel.find({}, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.send(JSON.stringify(data));
    }
  })
});

router.get('/:id', function(req, res, next){
    MachinesCategoryModel.findOne({id:req.params.id}, function(err, data){
      if(err){
        console.log(err)
      }
      else{
        res.send(data)
      }
    })
});

router.post('/', function(req, res, next){
  var s = new MachinesCategoryModel({
    id: req.body.id,
    name: req.body.name, 
    picture: req.body.picture
  })
  s.save().then(()=>console.log('MachineCategory was saved in DB'));
  next();
})

router.put('/', function(req, res, next){
    MachinesCategoryModel.findOneAndUpdate({name:req.body.oldName}, {$set: {name:req.body.newName}}, (err, doc)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(`MachineCategory was updated to: ${doc}`);
    }
  })
  next();
})

router.delete('/', function(req, res, next){
    MachinesCategoryModel.findOneAndDelete({id: req.body.id}, (err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('MachineCategory was deleted');
    }
  })
  next();
})

module.exports = router;
