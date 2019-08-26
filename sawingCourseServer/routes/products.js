var express = require('express');
var router = express.Router();
var ProductModel = require('../model/product');
var connection = require('../data/database');


router.get('/', function(req, res) {
    ProductModel.find({}, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.send(JSON.stringify(data));
    }
  })
});

router.get('/product/:id', function(req, res, next){
    ProductModel.findOne({id:req.params.id}, function(err, data){
      if(err){
        console.log(err);
      }
      else{
        res.send(data);
      }
    })
});

router.get('/:categoryId', function(req, res, next){
    ProductModel.find({categoryId:req.params.categoryId}, function(err, data){
      if(err){
        console.log(err);
      }
      else{
        res.send(data);
      }
    })
});

router.post('/', function(req, res, next){
  var s = new ProductModel({
    id: req.body.id,
    categoryId: req.body.categoryId,
    name: req.body.name, 
    picture: req.body.picture,
    price: req.body.price,
    colors: req.body.color,
    amount: req.body.amount
  });
  s.save().then(()=>console.log('Product was saved in DB'));
  next();
})

router.put('/', function(req, res, next){
    ProductModel.findOneAndUpdate({id:req.body.id}, {$set: {colors:req.body.colors}}, (err, doc)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(`Product was updated to: ${doc}`);
    }
  })
  next();
})

router.delete('/', function(req, res, next){
    ProductModel.findOneAndDelete({id: req.body.id}, (err)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('Product was deleted');
    }
  })
  next();
})

module.exports = router;
