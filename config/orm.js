var connection = require('./connection');


var orm = {
    //Used for displaying burgers that are in the database to the page
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM ??;"
      
        connection.query(queryString, [tableInput], function(err, result){
            if (err) throw err;
            var devoured = [];
            var undevoured = [];
            for(var i = 0; i < result.length; i++){

                if(result[i].devoured ==true){
                    devoured.push(result[i]);
                }
                else{
                    undevoured.push(result[i]);
                }
            }
            var objToCB = {
                devoured: devoured,
                undevoured: undevoured
            }
            cb(objToCB);

        });

    },
    //Used for inserting new burgers into the database
    insertOne: function(valToInsert, cb){
        var queryString = "INSERT INTO burgers (burgerName, devoured) VALUES (?, false);"
        connection.query(queryString, [valToInsert], function(err, result){
            if (err) throw err;
            cb(result);
        })
    },
    //Used for updating the devoured entry to the database
    updateOne: function(burgerToUpdate, cb){
        console.log(burgerToUpdate, "burgers2Update");
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?;";
        connection.query(queryString, [burgerToUpdate], function(err, result){
            if (err) throw err;
            console.log(result);
            
            cb(result);
            
        })

    }
};

module.exports = orm;