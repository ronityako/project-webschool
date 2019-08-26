var express = require('express');
var router = express.Router();
var StudentModel = require('../model/student');
var connection = require('../data/database');


router.get('/', function(req, res) {
  StudentModel.find({}, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.send(JSON.stringify(data));
    }
  })
});

router.get('/:id', function(req, res, next){
  StudentModel.findOne({id:req.params.id}, function(err, data){
    if(err){
      console.log(err)
    }
    else{
      res.send(data)
    }
  })
});

router.post('/', function(req, res, next){
  var s = new StudentModel({
    id: req.body.id, 
    fullName: req.body.fullName,
    phone: req.body.phone,
    mobile: req.body.mobile,
    school: req.body.school,
    class: req.body.class,
    group: req.body.group,
    startDate: req.body.startDate,
    payments: req.body.payments
  })

  s.save().then(()=>console.log('Student was saved in DB'));
  next();
},(req,res,next) => res.status(200))

router.put('/', function(req, res, next){
  StudentModel.findOneAndUpdate({id:req.body.id}, {$set: req.body}, (err, doc)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(`Student was updated to: ${doc}`);
    }
  })
  next();
},(req,res,next) => res.status(200) )

router.delete('/', function(req, res, next){
  StudentModel.findOneAndDelete({id: req.body.id}, (err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('Student was deleted');
    }
  })
  next();
},(req, res, next)=> res.status(200) )

module.exports = router;
