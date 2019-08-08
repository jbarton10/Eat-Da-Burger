var orm = require("./../config/orm");

var burger = {
    allBurgers:function(cb){
      orm.selectAll("burgers", function(res){
        cb(res);
      });
      
    }, 


    //Need to get input here 
    create:function(burgerName, cb){
      orm.insertOne(burgerName,function(res){
        cb(res);
      });
      
    },

    //Need on click for which burger will be updated
    update: function(burgerID, cb){
      console.log(burgerID, "insideUpdate");
      orm.updateOne(burgerID, function(res){
        cb(res);
      });
      
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;