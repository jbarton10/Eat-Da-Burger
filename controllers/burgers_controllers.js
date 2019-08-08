var express = require("express");
var burger = require("./../models/burgers.js");

var router = express.Router();

//Loads the page
router.get("/", function(req, res){
 
    burger.allBurgers(function(data){
        res.render("index", data);
    })
    
});
//Adds to the database
router.post("/burgers", function(req, res){
    
    var burger2Add = burger.create(req.body.newBurgerName, function(){
    console.log(burger2Add);
    console.log("heres");
    
});

});
//Updates the burger
router.put("/burgers/:id", function(req, res){
    console.log(req.params.id);
    var burger2Update = burger.update(req.params.id, function(){
        console.log("burger2update", burger2Update);
        return res.json({msg:"success"})
    
    });
  

});


module.exports = router;