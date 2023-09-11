const mongoose = require("mongoose");


const PlayersSchema = new mongoose.Schema({
    playerName : {
        type:String,
        required:[ true, "the Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [20, "Name must be at max 20 characters long"]
    },
    position : {
        type:String,
        required:[ true, "the Position is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        maxlength: [40, "Name must be at max 40 characters long"]
    },
    game1: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
      },
      game2: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
      },
      game3: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided",
      }

}, {timestamps:true});

module.exports = mongoose.model("Players", PlayersSchema) ;