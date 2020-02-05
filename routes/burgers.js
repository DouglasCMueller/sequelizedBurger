var express = require("express")
var router = express.Router();
var db = require("../config/database");
var Burger = require("../models/SequelizedBurger");

router.get("/", function(req,res){
Burger.findAll();
}).then(function(req,res){
    res.send("burgers") 
})
  

module.exports = router;