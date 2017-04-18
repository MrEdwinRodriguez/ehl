var mysql= require('mysql');
var models = require('../models');


module.exports.register = function(req, res){
	console.log('client being registered')
	    var password = req.body.password;

    return models.Clients.create({
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            middle_name: req.body.middle_name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            security_question: req.body.question,
            security_answer: req.body.answer,
            orginization: req.body.orginization,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
            bank_account: req.body.account,
            bank_routing: req.body.routing,
            facebook_email: req.body.facebook_email,
            facebook_password: req.body.facebook_password,

        }
    )

    res
        .status(200)
        .json(req.body);

}


module.exports.login = function(req, res){
	console.log('client loggin in')


}

module.exports.clientsGetAll = function(req, res){
	console.log('view all clients')


}

module.exports.clientsGetOne = function(req, res){
	console.log('view one client')


}