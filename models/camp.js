let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let Camp = [
    {weather: "winter", genre: "cold"}    
]
let Schema = mongoose.Schema;
//Create camp Schema and model
let CampSchema = new Schema ({
weather: {
        type: String,
        required: [true,"weather field is required"]
    },
hot: {
    type: String
},
available: {
    type: Boolean,
    default: false
},
items: {
    type: Array,
}
});

let camp = mongoose.model("camp",CampSchema);
module.exports = camp
