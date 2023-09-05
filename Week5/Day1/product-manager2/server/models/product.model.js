const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[ true, "the Title is required"],
        minlength: [6, "Title must be at least 6 characters long"]
    },
    price:{
        type:Number,
        required:[ true, "the Price is required"]
    },
    description:{
        type:String,
        required:[ true, "the Desciption is required"]
    }

}, {timestamps:true});

module.exports = mongoose.model("Products", ProductSchema) ;