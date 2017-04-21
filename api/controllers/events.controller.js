var mysql= require('mysql');
var models = require('../models');



module.exports.createEvent = function(req, res){
	console.log('create events')
	console.log(req.body)


}


//all evetents associated with client
module.exports.eventsClientGetAll = function(req, res){
	console.log('view all client events')
	

    res
        .status(202)
        .json({"events": "controller"})

}

//specific event associated with client
module.exports.eventsClientGetOne = function(req, res){
	console.log('view one client event')
	console.log(req.body)

}

//view all events in DB
module.exports.eventsGetAll = function(req, res){
	console.log('view all events')
	
    res
        .status(202)
        .json({"events": "controller"})

}

//view specific event in DB
module.exports.eventsGetOne = function(req, res){
	console.log('view one event')
	console.log(req.body)

}