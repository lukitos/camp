
let express = require("express");
let router = express.Router();
let Camp = require("../models/camp");
//angular.module("myapp", ["ngRoute"]);
//router.css(request, response);

// get a list of camp supplies
router.get("/camp", function(req,res){
    Camp.find().then(function(camp){
        res.json(camp)
    }).catch(err => res.send("Something broke"));
});

//add a new camp supply to the db
router.post("/camp", function(req,res){
    Camp.create(req.body).then(function(camp){
        res.json(camp)
    }).catch(err => res.send('Something broke'));
});

//update a camp supply in the db
router.put("/camp/:id", function(req,res){
    Camp.create(req.body).then(function(camp){
        res.json(camp)
    }).catch(err => res.send("something broke"));
    Camp.findByIdAndUpdate({_id: req.params.id},req.body).then(function(camp){

    });
});

//delete a camp supply from the db
router.delete("/camp/:id",function(req,res){
    Camp.create(req.body).then(function(camp){
    res.json(camp)
    }).catch(err => res.send("something broke"));
    Camp.findByIdAndRemove({_id: req.params.id}).then(function(camp){
    });
});

module.exports = router



