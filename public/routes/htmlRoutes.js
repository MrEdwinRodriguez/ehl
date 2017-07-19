var express = require('express');
var router = express.Router();
var path = require('path');
var ctrlEvents = require('../../api/controllers/events.controller.js');
var models = require('../../api/models')

//html routes

module.exports = function(app) {

    app
        .get('/home', function(req, res) {
            res.sendFile(path.join(__dirname, '../index.html'));
        });


    // app
    //     .get('/LoginError', function(req, res) {
    //         res
    //             .render('index', { error: "Password Incorrect" });
    //     })


    // app
    //     .get('/EmailError', function(req, res) {
    //         res
    //             .render('index', { error: "Email Not Found" });
    //     })

    // app
    //     .get('/resetpassword', function(req, res) {
    //         res.sendFile(path.join(__dirname, '../reset.html'));
    //     });

    // app
    //     .get('/reset/sent', function(req, res) {
    //         res.sendFile(path.join(__dirname, '../sent.html'));
    //     });

    app.get('/client', function(req, res) {

        var client_data = [];

        ctrlEvents.eventsClientGetAll(req.session.client_id, function(data) {

            function Event(id, name, date, location, sold, allotment, revenue) {
                this.id = id;
                this.eventName = name;
                this.date = date;
                this.location = location;
                this.sold = sold;
                this.allotment = allotment;
                this.revenue = revenue
            }

            for (i = 0; i < data.length; i++) {

                var date = new Date(data[i].event_date);
                var convertedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

                var myEvent = new Event(data[i].id, data[i].event_name, convertedDate, data[i].event_venue, data[i].sold, data[i].ticket_allotment, data[i].revenue)
                client_data.push(myEvent);
            }

        }).then(function() {

            console.log(client_data)

            res
                .status(200)
                .render('dashboard', {
                    email: req.session.client_email,
                    id: req.session.client_id,
                    first_name: req.session.first_name,
                    last_name: req.session.last_name,
                    client: client_data
                })

   
        })

    });


}


