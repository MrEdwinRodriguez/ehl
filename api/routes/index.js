var express = require('express');
var router = express.Router();

var eventsCtrl = require('../controllers/events.controller.js');
var clientCtrl = require('../controllers/client.controllers.js');
var patronsCtrl = require('../controllers/patrons.controller.js');

 
//register client
router
    .route('/client/register')
    .post(clientCtrl.register);

// //client login
router
    .route('/client/login')
    .post(clientCtrl.login); 

// //get clients
// router
//     .route('/clients')
//     .get(clientCtrl.clientsGetAll);  

router
    .route('/clients/:clientId')
    .get(clientCtrl.clientsGetOne);   

// // create events
// router
//     .route('/events/create')
//     .post(eventsCtrl.createEvent);

//get events
router
    .route('/events')
    .get(eventsCtrl.eventsGetAll);


// router
//     .route('/events/:eventsId')
//     .get(eventsCtrl.eventsGetOne); 

// router
//     .route('/clients/:clientID/events')
//     .get(eventsCtrl.eventsClientGetAll); 


// router
//     .route('/clients/:clientID/events/:eventId')
//     .get(eventsCtrl.eventsClientGetOne);    

//get patrons
// router
//     .route('/patrons')
//     .get(patronsCtrl.patronsGetAll);        

// router
//     .route('/patrons/:patronsId')
//     .get(patronsCtrl.patronsGetOne); 

// router
//     .route('/clients/:clientId/events/:eventId/patrons/:patronId')
//     .get(patronsCtrl.patronsGetOne);    


module.exports = router;
   