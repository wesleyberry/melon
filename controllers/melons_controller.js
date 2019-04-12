var express = require("express");

var router = express.Router();

var melon = require("../models/melon.js");

router.get("/", function(req, res) {
    melon.selectAll(function(data) {
        var hbsObject = {
            melons:data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/melons", function(req, res) {
    var name = req.body.name;
    // console.log("Controller request test:" + req.body.name);
    melon.insertOne([
        "melon_name"
    ], [name], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/melons/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log(req.body.devour);
    melon.updateOne({
        eatable: req.body.devour
    }, condition, function(result) {
        if(result.changedRows === 0) {
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
    });
});

module.exports = router;