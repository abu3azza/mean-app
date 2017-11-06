var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes');

//======== Setting up the port ========
// app.listen(3001);

// ===========Another way is========== 
app.set('port', 3002);

//============ Logging (chain filters)==============
app.use(function (req, res, next) {
    loggingFunction(req, res, next);
});
//========== Using app router ============
app.use('/api', routes);
//============Logging CSS only ================
app.use('/css', function (req, res, next) {// Now this will get called only if a css is requested
    loggingFunction(req, res, next);
});

app.use(express.static(path.join(__dirname, "public")));
var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log("Magic Happens on port " + port);
});
console.log("After app.listen");



app.get('/file', function (req, res) {
    console.log("Getting file");
    res.status(200).sendFile(path.join(__dirname, '/app.js'));
});

var loggingFunction = function (req, res, next) {
    console.log("Logging b4 url", req.method, req.url);
    next();
}