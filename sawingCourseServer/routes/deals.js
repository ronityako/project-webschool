var express = require('express');
var router = express.Router();
var DealModel = require('../model/deal');
var ProductModel = require('../model/product');
var connection = require('../data/database');


router.get('/', function(req, res) {
    DealModel.find({}, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      console.log(data);
      res.send(JSON.stringify(data));
    }
  })
});

router.post('/', function(req, res, next){
  console.log('deal post');
  var s = new DealModel({
    fullName: req.body.customer_name,
    phone: req.body.customer_phone,
    date: req.body.date,
    paymentMethod: req.body.paymentMethod, 
    products: req.body.products,
    subTotal: req.body.subTotal
  });

  console.log('dealModel.products = ');
  console.log(s.products);

  s.save().then(()=>{
    console.log('Deal was saved in DB');
     //update amounts in the products collection:
   var products;
   ProductModel.find({}, function(err, data){
     if(err){
       console.log(err);
     }
     else{
       products = data;
       console.log('deal:');
       console.log(s);
       s.products.forEach(prod => {
         let prodToChange = products.find((ele) => { 
           return ele.categoryId==prod.categoryId && ele.id==prod.id
         });
         console.log('prod to change');
         console.log(prodToChange);
         //product with color:
         if(prod.colorId != undefined){
            let index = prodToChange.colors.findIndex((item)=>{return item.colorId == prod.colorId});
            console.log(`index: ${index} prod to change amount: ${prodToChange.amount[index]}`);
            prodToChange.amount[index] -= prod.amount;
         }
         //product with no color:
         else{
           prodToChange.amount[0] -= prod.amount;
         }
         console.log(prodToChange);
         ProductModel.findOneAndUpdate({categoryId:prodToChange.categoryId, id:prodToChange.id}, {$set: prodToChange},{new: true}, (err, doc) => {
           if(err){
             console.log(err);
           }
           else{
             res.status(200).send(doc);
             console.log(`Product amount was updated to: ${doc}`);
           }
         });
 
       });
     }
   })
    // res.status(200).).send(s);
  });
})
  


module.exports = router;
