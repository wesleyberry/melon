var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, col, val, cb) {
      console.log(table, col, val);
        var queryString = "INSERT INTO " + table;
        queryString += " (" + col.toString() + ") ";
        queryString += "VALUES (?);";
        console.log(queryString);
        connection.query(queryString, val, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, colVal, condition, cb) {
      console.log("ORM request test: " + colVal + condition);
        var queryString = "UPDATE " + table;
        queryString += " SET devoured = 1";
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if(err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;