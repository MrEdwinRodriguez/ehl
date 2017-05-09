var mysql = require('mysql');
var models = require('../models');

module.exports.ticketsForEvent = function(req, res) {
  console.log('tickets for event')

    
    var eventId = req.params.eventId;

    return models.Tickets.findAll({
        where: {
            EventId: eventId
        },
        include: [{
        	model: models.Events,
            model: models.Patrons
        }]
    }).then(function(tix) {

        console.log(tix)

        res
            .status(202)
            .send(tix)
    })
}

module.exports.ticketsGetAll = function(req, res) {
    console.log('tickets get all')


    // return models.tickets.findAll({
    //     // where: {
    //     //     LivoxUserId: id
    //     // },
    //     // include: [{
    //     //     // model: models.Livox_evaluation,
    //     //     model: models.Livox_user,
    //     //     include: [models.Livox_holder]
    //     // }],
    // }).then(function(tix) {




    //     res
    //         .status(202)
    //         .json({ "hello": "world" }

    // })
}

module.exports.ticketsGetOne = function(req, res) {
    console.log('tickets get one')


    res 
        .status(202)
        .json({ "hello": "world" })

}


module.exports.ticketsPurchase = function(req, res) {
    console.log('purchase tickets')
    console.log(req.body)
var ticket_number = "";
    makeid();
    function makeid() {
        
        var possible = "0123456789";

        for (var i = 0; i < 10; i++)
            ticket_number += possible.charAt(Math.floor(Math.random() * possible.length));

        return ticket_number;
    }

console.log(ticket_number)

    return models.Tickets.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        ticket_number: ticket_number,
        EventId: 1
  
    })

    res
        .status(200)
        .json(req.body)

}