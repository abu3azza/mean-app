var express = require('express');
var app = express();
var path = require('path');
//======== Setting up the port ========
// app.listen(3001);

// ===========Another way is========== 
app.set('port',3002);
var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Magic Happens on port " + port);
});
console.log("After app.listen");

app.get('/', function(req,res){
    console.log("Getting homepage");
    res.status(200).send("Hallasabala "+__dirname);
});

app.get('/json', function(req,res){
    console.log("Getting JSON");

    var object = {name: "mina",age: 20};
    res.status(202).json(object);
});

app.get('/file', function(req,res){
    console.log("Getting file");
    res.status(200).sendFile(path.join(__dirname,'/app.js'));
});