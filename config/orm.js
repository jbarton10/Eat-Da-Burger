var connection = require('connection');


var orm = {
    //Used for displaying burgers that are in the database to the page
    selectAll: function(tableInput, colToSearch, valOfCol){
        var queryString = "SELECT * FROM ?? WHERE ?? = ?;"
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result){
            if (err) throw err;
            console.log(result);

        });

    },
    //Used for inserting new burgers into the database
    insertOne: function(valToInsert){
        var queryString = "INSERT INTO burgers (burgerName, devoured) VALUES ('?', false);"
        connection.query(queryString, [valToInsert], function(err, result){
            if (err) throw err;
            console.log(result);
        })
    },
    //Used for updating the devoured entry to the database
    updateOne: function(burgerToUpdate){
        var queryString = "UPDATE burgers SET devoured = true WHERE 'burgerName' = ?;";
        connection.query(queryString, [burgerToUpdate], function(err, result){
            if (err) throw err;
            console.log(result);
        })

    }
};

module.exports = orm;