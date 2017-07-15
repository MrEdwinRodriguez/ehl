var express = require('express');
var router = express.Router();
var path = require('path');
var ctrlClient = require('../../api/controllers/client.controllers.js');
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

        // var user_data;
        // var user_data_id = [];


        // ctrlUsers.holderGetAllUsers(req.session.holder_id, function(data) {
 
        //     user_data = data;

        //     for (i = 0; i < user_data.length; i++) {
        //         user_data_id.push(user_data[i].id);
        //     }

        // }).then(function() {
        //     ctrlEvaluations.evaluationsLastDate(user_data_id, function(last_date) {

        //         //adds last_date to user data obj
        //         for (i = 0; i < last_date.length; i++) {
        //             console.log(last_date[i].date)                  
        //             user_data[i].last_date = last_date[i].date
    
        //         }

        //     })
        // }).then(function() {
        //     ctrlEvaluations.evaluationsCount(user_data_id, function(evals) {

        //         console.log('evals')
        //         console.log(evals)

              
        //             //turn array into array of object
        //         for (i = 0; i < user_data.length; i++) {
        //             user_data[i].counter = evals[i].count
        //         }


                    console.log('rendering')
                
                    res
                        .status(200)
                        .render('dashboard', {
                            email: req.session.client_email,
                            id: req.session.client_id,
                            first_name: req.session.first_name,
                            last_name: req.session.last_name
                            // users: user_data
                        })

                // }

        //     })
        // })

    });


}


