const mongoose = require("mongoose");


const mongoDB = new mongoose.Schema({
    name : {
        type:String,
        required:[ true, "the First Name is required"],
        minlength: [3, " Name must be at least 3 characters long"],
        maxlength: [20, " Name must be at max 20 characters long"]
    },
    home_state : {
        type:String,
        required:[ true, "the Home State is required"],
        enum: ["California","Washington"],
        minlength: [10, "Please Write California Or Washington"],
        maxlength: [10, "Please Write California Or Washington"]
    },
    lucky_number : { 
        type: Number,
        min : [1," Lucky Number Min Is 1"],
        max : [15," Lucky Number Max Is 15"]

    }

}, {timestamps:true});

module.exports = mongoose.model("MongoDB", mongoDBSchema) ;