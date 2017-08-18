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

            function Event(id, name, date, location, sold, allotment, revenue, event_flyer) {
                this.id = id;
                this.eventName = name;
                this.date = date;
                this.location = location;
                this.sold = sold;
                this.allotment = allotment;
                this.revenue = revenue;
                this.flyer = event_flyer;
            }

            for (i = 0; i < data.length; i++) {

                var date = new Date(data[i].event_date);
                var convertedDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

                var myEvent = new Event(data[i].id, data[i].event_name, convertedDate, data[i].event_venue, data[i].sold, data[i].ticket_allotment, data[i].revenue, data[i].event_flyer)
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

    app.get('/events/list', function(req, res) {
        console.log('events/list has been called');
        // var last_date = req.query.last_eval
  

        return models.Events.findAll({
            //where: {
            //    id: eventId
            //}//,
            // include: [{
            //     model: models.Tickets
            //     // include: [models.Tickets]
            // }]
        // }).then(function(event) {
        //     console.log(event)
        //     console.log('event information')
 
        //     ctrlEvaluations.evaluationsGetAll(user_data, function(evals) {
        //         console.log('get all evals has been called')

                // evaluations = evals

            }).then(function(evals) {
                console.log('----Got this event-------');
                console.log(evals);
                // ctrlEvaluations.evaluationsLastDate(user_data, function(last_date) {

                //     var date = new Date(user[0].birthdate);
                //     date = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
                        

                    res
                        .status(200)
                        .render('events', {
                            events:evals,
                            device: 'testing',
                             first_name: 'Edwin',
                             last_name: 'Rodriguez',
                            // diagnosis: user[0].disability,
                            // interest: user[0].interests,
                            // userId: user[0].id,
                            // today: today,
                            // birthday: date,
                            // last_eval: last_date[0].date,
                            // evaluations: evaluations
                        });
                        


                    
                // })

            // })
        })

    })
    //app.get('/events/eventid=87746:eventId', function(req, res) {
    app.get('/events/:eventId/:eventName', function(req, res) {
        console.log('events/:EventId/:eventName has been called')


        var eventId = req.params.eventId;
        console.log(eventId);
        // var last_date = req.query.last_eval
  

        return models.Events.findAll({
            where: {
                id: eventId
            }//,
            // include: [{
            //     model: models.Tickets
            //     // include: [models.Tickets]
            // }]
        // }).then(function(event) {
        //     console.log(event)
        //     console.log('event information')
 
        //     ctrlEvaluations.evaluationsGetAll(user_data, function(evals) {
        //         console.log('get all evals has been called')

                // evaluations = evals

            }).then(function(evals) {
                console.log('----Got this event-------');
                console.log(evals[0]['dataValues']);
                // ctrlEvaluations.evaluationsLastDate(user_data, function(last_date) {

                //     var date = new Date(user[0].birthdate);
                //     date = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
                        

                    res
                        .status(200)
                        .render('events', {
                            event:evals[0]['dataValues'],
                            device: 'testing',
                             first_name: 'Edwin',
                             last_name: 'Rodriguez',
                        });
                        


                    
                // })

            // })
        })

    })

    app
        .get('/events/createevents', function(req, res) {
            console.log(req.session.client_id)
            res
                .status(200)
                .render('createEvent', {
                    email: req.session.client_email,
                    id: req.session.client_id,
                    first_name: req.session.first_name,
                    last_name: req.session.last_name
                })

        });

// route that allows client to see specific event
    app
        .get('/client/events/:eventId', function(req, res) {
            var eventID = req.params.eventId
       ctrlEvents.eventsClientGetOne(eventID, function(data) {
        
            return data
        }).then(function(event) {
            console.log('here already!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11')
            console.log(event[0])

            res
                .status(200)
                // .render('myEvent', {
                //     email: req.session.client_email,
                //     id: req.session.client_id,
                //     first_name: req.session.first_name,
                //     last_name: req.session.last_name
                // })
                .render('myEvent', {
                            event:event[0],
                            device: 'testing',
                            id: req.session.client_id,
                             first_name: req.session.first_name,
                             last_name: req.session.last_name,
            }); 
            })
        });


// creates new link for every event for patrons to purchase
    // app
    //     .get('/events/:eventName', function(req, res) {
    //         console.log(req.session.client_id)
    //         res
    //             .status(200)
    //             .render('createEvent', {
    //                 email: req.session.client_email,
    //                 id: req.session.client_id,
    //                 first_name: req.session.first_name,
    //                 last_name: req.session.last_name
    //             })

    //     });        

    app
        .get('/events/createevent/flyer', function(req, res) {
            
            console.log(req.session.client_id)

            res
                .status(200)
                .render('flyer', {
                    email: req.session.client_email,
                    id: req.session.client_id,
                    first_name: req.session.first_name,
                    last_name: req.session.last_name
                })

        });        

    app
        .get('/mypatrons', function(req, res) {


        return models.Events.findAll({
            where: {
                ClientId: req.session.client_id
            },
            include: [{
                // model: models.Tickets
                model: models.Tickets
                // include: [models.Patrons]
            }]

            }).then(function(events) {
                var patronsArr = [];

                console.log('line 174!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11')
                console.log('patron: ' + events[0].Tickets[0].PatronId)

                for(i=0; i< events.length; i++){

                    for(y=0; y<events[i].Tickets.length; y++){
                        console.log(events[i].Tickets[y].PatronId)
                        patronsArr.push(events[i].Tickets[y].PatronId)
                    } 

                    
                }
                console.log(patronsArr)
                return patronsArr
            }).then(function(patrons) {
                console.log(patrons)

                return models.Patrons.findAll({
                    where: {
                        id: patrons
                    }
                })

            }).then(function(patronInfo) {
               
                var patrons_data = [];

                 for (i=0; i<patronInfo.length; i++){

                    function Patron(id, first, last, email, phone, gender) {
                        this.id=id
                        this.firstName = first;
                        this.lastName = last;
                        this.email = email;
                        this.phoneNumber = phone;
                        this.gender = gender
                    }
                    var myPatron = new Patron(patronInfo[i].id, patronInfo[i].first_name, patronInfo[i].last_name, patronInfo[i].email, patronInfo[i].phone_number, patronInfo[i].gender);
                    patrons_data.push(myPatron)
                 }


                 console.log(patrons_data)
                        res
                            .status(200)
                            .render('contacts', {
                                email: req.session.client_email,
                                id: req.session.client_id,
                                first_name: req.session.first_name,
                                last_name: req.session.last_name,
                                patron: patrons_data
                            })

        })





        });                


}


