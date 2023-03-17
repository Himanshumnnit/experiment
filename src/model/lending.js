const mongoose=require("mongoose")
//for object detail................
const LendingSchema=new mongoose.Schema({
  
    name:{
        type:String,
        required:true
    },
    price:Number,
    time:Number,
    sellername:String,
    sellerphone:String,
    sellerid:String
    
})

//making collection based on schema
const LendItem=new mongoose.model("Collection2",LendingSchema)

module.exports=LendItem;
