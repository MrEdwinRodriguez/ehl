var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var routes = require('./api/routes');
var cookieParser = require('cookie-parser');
var session = require('express-session');

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
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: 'app',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));


app.use('/api', routes);


var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log("Events go LIVE at port " + port);
});