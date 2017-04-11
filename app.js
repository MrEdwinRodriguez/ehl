var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.set('port', 8000);

// middleware that logs out methods and urls
app.use(function(req, res, next) {
    console.log(req.method, req.url)
    next();
});


// looks to the public folder for index.html
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log("Events go LIVE at port " + port);
});