const mongoose = require("mongoose");


const AuthorsSchema = new mongoose.Schema({
    authorName : {
        type:String,
        required:[ true, "the Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [20, "Name must be at max 20 characters long"]
    }

}, {timestamps:true});

module.exports = mongoose.model("Authors", AuthorsSchema) ;