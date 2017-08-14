var express = require('express');
var router = express.Router();
var multer  = require('multer')
//var upload = multer({ dest: 'uploads' })
var fs = require('fs');

var path = require('path');
const crypto = require('crypto');
var userImagesPath = path.resolve(__dirname, "../../uploads");
/**
 * Configuration of multer to save imagesStorage
 */
var imagesStorage = multer.diskStorage({
    // used to determine within which folder the uploaded files should be stored.
    destination: function(req, file, callback) {
        callback(null, userImagesPath);
    },
    filename: function(req, file, callback) {
        //callback(null, file.originalname);
        callback(null,crypto.randomBytes(20).toString('hex')+path.extname(file.originalname)) //appending extension
    }
});
///Configuring file system storage (recomended to store images and files)
var uploadImages = multer({ storage: imagesStorage });

var eventsCtrl = require('../controllers/events.controller.js');
var clientCtrl = require('../controllers/client.controllers.js');
var patronsCtrl = require('../controllers/patrons.controller.js');
var ticketsCtrl = require('../controllers/tickets.controller.js');
 
//register client
router
    .route('/client/signup')
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



//get events
router
    .route('/events')
    .get(eventsCtrl.eventsGetAll);

router
    .route('/events/create')
    .post(uploadImages.single("eventFlyer"),eventsCtrl.createEvent);

// router
//     .route('/events/flyer')
//     .post(uploadImages.single("eventFlyer"), eventsCtrl.createEventFlyer);   

 
// router
//     .route('/events/:eventsId')
//     .get(eventsCtrl.eventsGetOne); 

router
    .route('/clients/:clientId/events')
    .get(eventsCtrl.eventsClientGetAll); 


// router
//     .route('/clients/:clientID/events/:eventId')
//     .get(eventsCtrl.eventsClientGetOne);    

//patrion login
router
    .route('/patrons/register')
    .post(patronsCtrl.register);

router
    .route('/patrons/login')
    .post(patronsCtrl.login);    


 //get patrons
// router
//     .route('/patrons')
//     .get(patronsCtrl.patronsGetAll);        

// router
//     .route('/patrons/:patronsId')
//     .get(patronsCtrl.patronsGetOne); 

// router
//     .route('/clients/:clientId/patrons')
//     .get(patronsCtrl.patronsClientGetAll); 

// router
//     .route('/clients/:clientId/events/:eventId/patrons/:patronId')
//     .get(patronsCtrl.patronsGetOne); 

 //get tickets
router
    .route('/tickets')
    .get(ticketsCtrl.ticketsGetAll);

router
    .route('/tickets/purchase')
    .post(ticketsCtrl.ticketsPurchase);    

router
    .route('/tickets/:ticketId')
    .get(ticketsCtrl.ticketsGetOne);    

router
    .route('/events/:eventId/tickets')
    .get(ticketsCtrl.ticketsForEvent);   


module.exports = router;
   