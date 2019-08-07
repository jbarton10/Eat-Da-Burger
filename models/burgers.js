var orm = require("./../config/orm");

var burger = {
    allNotEaten: 
      orm.selectAll("burgers", "devoured", false ),

    allEaten:
        orm.all("burgers", "devoured", true),

    //Need to get input here 
    create:
      orm.create(burgerName),

    //Need on click for which burger will be updated
    update: 
      orm.update(burgerToEat)
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;