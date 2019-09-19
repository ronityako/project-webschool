var express = require('express');
var router = express.Router();
var ModelModel = require('../model/model');
var connection = require('../data/database');
var formidable = require('formidable');
var fs = require('fs');


router.get('/', function(req, res) {
  console.log('in models get');
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

  console.log('in models post');
  var newpath;
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    console.log(files)
    var oldpath = files.filetoupload.path;
    console.log(oldpath)
    newpath = __dirname + `/../public/images/models/${files.filetoupload.name}`;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      else{
          console.log(newpath)
      }
    })
  })

  var s = new ModelModel({
    picture: newpath
  });
  s.save().then(()=>console.log('Model was saved in DB'));
  res.status(200).send(s);
})

// router.put('/', function(req, res, next){
//     ModelModel.findOneAndUpdate({id:req.body.id}, {$set: {picture:req.body.picture}}, (err, doc)=>{
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(`Model was updated to: ${doc}`);
//     }
//   })
//   next();
// })

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
