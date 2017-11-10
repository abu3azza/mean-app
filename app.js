var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');

// ======== Setting up the port ========

// ===========Another way is========== 
app.set('port', 3002);
//============ Logging (chain filters)==============
app.use(function (req, res, next) {
    loggingFunction(req, res, next);
});
//========== Using app router ============
//============Logging CSS only ================
app.use('/css', function (req, res, next) {// Now this will get called only if a css is requested
    loggingFunction(req, res, next);
});

var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log("Magic Happens on port " + port);
});

//Theis is where to find static files (you should keep your CSSs imgs and Javascripts in this folder)
app.use(express.static(path.join(__dirname, "public")));
//This is a configuration for being able to parse post request data.
app.use(bodyParser.urlencoded({extended : false}));
//This is where you should go for routing (i.e. non-static files i.e. anything outside folder public)
app.use('/', routes);

app.get('/file', function (req, res) {
    console.log("Getting file");
    res.status(200).sendFile(path.join(__dirname, '/app.js'));
});

var loggingFunction = function (req, res, next) {
    console.log("Logging b4 url", req.method, req.url);
    next();
}