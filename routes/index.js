let express = require('express');
let router = express.Router();
let User = require("../models/user");


// GET home page
router.get('/', (req, res) => { 
    res.render('index');
});

// POST user login
router.post("/login",function(req,res){
    let username = req.body.username;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;

    let newuser = new User();
    newuser.username = username;
    newuser.password = password;
    newuser.firstname = firstname;
    newuser.lastname = lastname;
    newuser.save(function(err,savedUser){
        if(err) {
            console.log(err);
            return res.status(500).send();
        }
        return res.status(200).send("");
        req.session.user = user;


    });
});

router.get("/dashboard", function(req, res){
    if(!req.session.user) {
        return res.status(401).send();

    }
    return res.status(200).send("");
    req.session.user = user;

});

//  POST register user
router.post("/register",function(req,res){
    let username = req.body.username;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;

    let newuser = new User();
    newuser.username = username;
    newuser.password = password;
    newuser.firstname = firstname;
    newuser.lastname = lastname;
    newuser.save(function(err,savedUser){
        if(err) {
            console.log(err);
            return res.status(500).send();
        }

        return res.status(200).send();

    });
});

module.exports = router;
