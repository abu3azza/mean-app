var express = require('express');
var router = express.Router();

router.route('/json').get(function (req, res) {
    console.log("Getting JSON from Route");

    var object = { name: "Route mina", age: 20 };
    res.status(202).json(object);
}).post(function (req, res) {
    console.log("Getting JSON post");

    var object = { name: "minapost ", age: 20 };
    res.status(202).json(object);
});

module.exports = router;