const mongoose=require('mongoose');
const schema=mongoose.Schema;

const driverSchema=new schema({
  fullname:String,
  address:String,
  gender:String,
  birthday:Date,
  nicnumber:String,
  email:String,
  vehiclenumber:String,
  vehicletype:String,
  vehiclemodel:String



});

module.exports=mongoose.model('driver',driverSchema,'drivers');
