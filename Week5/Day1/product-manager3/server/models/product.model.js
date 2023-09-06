const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[ true, "the Title is required"],
        minlength: [3, "Title must be at least 3 characters long"],
        maxlength: [20, "Title must be at max 20 characters long"]
    },
    price:{
        type:Number,
        required:[ true, "the Price is required"]
    },
    description:{
        type:String,
        required:[ true, "the Desciption is required"],
        minlength: [9, "Desciption must be at least 9 characters long"],
        maxlength: [500, "Desciption must be at Max 500 characters long"]
    }

}, {timestamps:true});

module.exports = mongoose.model("Products", ProductSchema) ;