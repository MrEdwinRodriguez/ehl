var mysql= require('mysql');
var models = require('../models');
var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads' })
var fs = require('fs');




 
module.exports.createEvent = function(req, res){
	console.log('create events')
	console.log(req.body)
	console.log("id: " +req.session.client_id)

  return models.Events.create({ 
        event_name: req.body.event_name,
        event_date: req.body.event_date,
        event_time: req.body.event_time,
        event_venue: req.body.venue,
        event_address: req.body.address,
        event_city: req.body.event_city,
        event_state: req.body.event_state,
        event_zip: req.body.zipcode,
        event_contact_phone: req.body.event_contact_phone_number,
        event_contact_email: req.body.event_contact_email,
        event_description: req.body.description,
        event_website: req.body.website,
        online_price: req.body.online_price,
        door_price: req.body.door_price,
        ticket_sales_start: req.body.tickets_start,
        ticket_sales_end: req.body.tickets_end,
        ticket_allotment: req.body.allotment,
        ClientId: req.session.client_id,

        dob: req.body.dob,
        gender: req.body.gender,
        education: req.body.education,
        income: req.body.income,
        ethnicity: req.body.ethnicity,
        religion: req.body.religion

    
  }).then(function() {

  console.log('redirecting')
        res
            .status(200)
            .redirect('/events/createEvent/flyer') 
            })   

}


//uploads flyer for event
module.exports.createEventFlyer = function(req, res, next){
    console.log('uploading flyer')
    console.log(req.file)
    //     res.send(res.file)
  //     var file = __dirname + '/' + req.file.filename;
  // fs.rename(req.file.path, file, function(err) {
  //   if (err) {
  //     console.log(err);
  //     res.send(500);
  //   } else {
  //     res.json({
  //       message: 'File uploaded successfully',
  //       filename: req.file.filename
  //     });
  //   }
  // });
}

//all evetents associated with client
module.exports.eventsClientGetAll = function(req, cb){
	console.log('view all client events')
    console.log(req)
        var clientId = req;
        console.log(clientId)
         

        return models.Events.findAll({
        where: {
            ClientId: clientId
        },
        include: [{
            model: models.Clients
            // model: models.Events
            // model: models.Patrons
           
        }],
    }).then(function(data) {
        console.log(data)

        cb(data)
    // res
    //     .status(202)
    //     .json(data)
    

    })
	



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