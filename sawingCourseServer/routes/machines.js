var express = require('express');
var router = express.Router();
var MachineModel = require('../model/machine');
var connection = require('../data/database');


router.get('/', function(req, res) {
    MachineModel.find({}, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.send(JSON.stringify(data));
    }
  })
});

router.get('/:id', function(req, res, next){
    MachineModel.findOne({id:req.params.id}, function(err, data){
      if(err){
        console.log(err)
      }
      else{
        res.send(data)
      }
    })
});

router.get('/:categoryId', function(req, res, next){
    MachineModel.findOne({categoryId:req.params.categoryId}, function(err, data){
      if(err){
        console.log(err)
      }
      else{
        res.send(data)
      }
    })
});

router.post('/', function(req, res, next){
  var s = new MachineModel({
    id: req.body.id,
    categoryId: req.body.categoryId,
    name: req.body.name, 
    picture: req.body.picture,
    price: req.body.price,
    amount: req.body.amount
  })
  s.save().then(()=>console.log('Machine was saved in DB'));
  next();
})

router.put('/', function(req, res, next){
  MachineModel.findOneAndUpdate({name:req.body.oldName}, {$set: {name:req.body.newName}}, (err, doc)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(`Machine was updated to: ${doc}`);
    }
  })
  next();
})

router.delete('/', function(req, res, next){
  MachineModel.findOneAndDelete({id: req.body.id}, (err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('Machine was deleted');
    }
  })
  next();
})

module.exports = router;
