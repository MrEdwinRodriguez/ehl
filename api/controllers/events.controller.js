var mysql= require('mysql');
var models = require('../models');



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
        ClientId: req.session.client_id

    })

    res
        .status(200)
        .json(req.body)





}


//all evetents associated with client
module.exports.eventsClientGetAll = function(req, res){
	console.log('view all client events')

        var clientId = req.params.clientId;
        console.log(clientId)
         

        return models.Events.findAll({
        where: {
            ClientId: clientId
        },
        include: [{
            model: models.Clients
           
        }],
    }).then(function(data) {

    res
        .status(202)
        .json(data)
    

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