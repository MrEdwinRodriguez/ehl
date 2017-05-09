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


function Ticket(first, last, ticket_number, event) {
    this.first_name = first;
    this.last_name = last;
    this.ticket_number = ticket_number;
    this.EventId = event;
}

var tix = [];

var ticket_number = "";

    makeBulk(req.body.quantity);


function makeid() {
  
     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var text = "";
     for (var i = 0; i < 10; i++)
         text += possible.charAt(Math.floor(Math.random() * possible.length));

     return text;
 }
 


    function makeBulk(amount) {

       for (i=0; i<amount; i++) {
        console.log(amount)

        var ticket_number = makeid() 
            // makeid();

        var uniqueTicket = new Ticket(req.body.first_name, req.body.last_name, ticket_number, 1);
        tix.push(uniqueTicket);
    }
}

console.log(tix)

    return models.Tickets.bulkCreate(tix)
    
  

    res
        .status(200)
        .json(req.body)

}