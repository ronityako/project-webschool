var express = require('express');
var router = express.Router();
var DealModel = require('../model/deal');
var connection = require('../data/database');


router.get('/', function(req, res) {
    DealModel.find({}, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.send(JSON.stringify(data));
    }
  })
});

router.post('/', function(req, res, next){
    console.log('deal post');
  var s = new DealModel({
    fullName: req.body.fullName,
    phone: req.body.phone,
    paymentMethod: req.body.paymentMethod, 
    products: req.body.products,
    subTotal: req.body.subTotal
  });

  s.save().then(()=>{
    console.log('Deal was saved in DB');
    res.status(200).send(s);
  });
})


module.exports = router;
