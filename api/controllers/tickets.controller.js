var mysql = require('mysql');
var models = require('../models');

module.exports.ticketsForEvent = function(req, res) {
  console.log('tickets for event')

    // var eventId = req.params.userId;
    var eventId = 1;

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
