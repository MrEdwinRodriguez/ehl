var mysql = require('mysql');
var models = require('../models');
var bcrypt = require('bcrypt-nodejs');



module.exports.register = function(req, res) {
    console.log('patron being registered')

    var password = req.body.password;

    return models.Clients.create({
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        age: req.body.age,
        gender: req.body.gender,
        agreed_terms: req.body.terms

    })

    res
        .status(200)
        .json(req.body)

}