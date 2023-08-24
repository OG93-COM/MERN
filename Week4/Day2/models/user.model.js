const mongoose = require("mongoose");

const shopcars = new mongoose.Schema({
    namecar :{
        type : String,
        required : [true,"The name of car is required"],
        minlength : [3,"Minimum length is 3"]
    },
    powerhp : {
        type : Number,
        
    }
}, {timetamps:true});

module.exports.shopcarsSchema= mongoose.model("shopcarSchema",shopcars)