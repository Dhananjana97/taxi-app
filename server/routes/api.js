const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const driver=require('../models/driver');


const db="mongodb://localhost:27017/turn"

mongoose.Promise=global.Promise;

mongoose.connect(db,function (err) {
  if(err){
    console.error("Error! "+err);
  }

});
router.get('/drivers/:id',function(req,res) {
  console.log('get request single driver');
  driver.findById(req.params.id)
    .exec(function (err,driver) {
      if (err){
        console.log('Error in retrieving drivers')
      } else{
        res.json(driver)
      }

    });
});

router.get('/drivers',function(req,res) {
  console.log('get request for all driver');
  driver.find({})
    .exec(function(err,drivers){
      if (err){
        console.log('Error in retrieving drivers')
      } else{
        res.json(drivers)
      }

    });
});



router.post('/adddriver',function (req,res) {
  console.log('post a driver details');
  var newDriver=new driver();
  newDriver.fullname=req.body.fullname;
  newDriver.address=req.body.address;
  newDriver.gender=req.body.gender;
  newDriver.birthday=req.body.birthday;
  newDriver.nicnumber=req.body.nicnumber;
  newDriver.email=req.body.email;
  newDriver.vehiclenumber=req.body.vehiclenumber;
  newDriver.vehicletype=req.body.vehicletype;
  newDriver.vehiclemodel=req.body.vehiclemodel;
  newDriver.save(function (err,insertedDriver) {
    if (err){
      console.log('error in registering driver');
    } else{
      res.json(insertedDriver);
    }

  })
})

module.exports=router;
