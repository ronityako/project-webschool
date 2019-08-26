var express = require('express');
var router = express.Router();
var ProductsCategoryModel = require('../model/productsCategory');
var connection = require('../data/database');


router.get('/', function(req, res) {
    ProductsCategoryModel.find({}, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.send(JSON.stringify(data));
    }
  })
});

router.get('/:id', function(req, res, next){
    ProductsCategoryModel.findOne({id:req.params.id}, function(err, data){
      if(err){
        console.log(err)
      }
      else{
        res.send(data)
      }
    })
});

router.post('/', function(req, res, next){
  var s = new ProductsCategoryModel({
    id: req.body.id,
    name: req.body.name, 
    picture: req.body.picture
  })
  s.save().then(()=>console.log('ProductsCategory was saved in DB'));
  next();
})

router.put('/', function(req, res, next){
    ProductsCategoryModel.findOneAndUpdate({name:req.body.oldName}, {$set: {name:req.body.newName}}, (err, doc)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(`ProductsCategory was updated to: ${doc}`);
    }
  })
  next();
})

router.delete('/', function(req, res, next){
    ProductsCategoryModel.findOneAndDelete({id: req.body.id}, (err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('ProductsCategory was deleted');
    }
  })
  next();
})

module.exports = router;
