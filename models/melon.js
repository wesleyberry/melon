var orm = require("../config/orm.js");

var melon = {
    selectAll: function(cb) {
        orm.selectAll("melons", function(res) {
            cb(res);
        });
    },
    insertOne: function(col, val, cb) {
        console.log("Model request test:" + col + " " + val);
        orm.insertOne("melons", col, val, function(res) {
            cb(res);
        });
    },
    updateOne: function(colVal, condition, cb) {
        console.log("Model update test:" + colVal.eatable, condition);
        orm.updateOne("melons", colVal.eatable, condition, function(res) {
            cb(res);
        });
    }
}
module.exports = melon;