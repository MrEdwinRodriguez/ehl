var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//sequelize looks for models
var models = require('./api/models')

var sequelizeConnection = models.sequelize;
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')
    // this syncs our tables
    .then(function() {
        return sequelizeConnection.sync({force:true})
    })


app.set('port', 8000);


// logs activity methods and url's
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