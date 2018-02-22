let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

let user = [
    {login: "email", password: "name"}
]

let Schema = mongoose.Schema;
// create user schema and model
let UserSchema = new Schema ({
    username: {
        type: String,
        required: [true, "user field is required"]
    },
    password: {
        type: String,
    },
    firstname: {
        type: String,
        default: false
    },
    lastname: {
        type: String,
    },

});

module.exports = user;
module.exports =  mongoose.model('User', UserSchema)
