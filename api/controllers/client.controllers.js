var mysql = require('mysql');
var models = require('../models');
var bcrypt = require('bcrypt-nodejs');


module.exports.register = function(req, res) {
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

    })

    res
        .status(200)
        .json(req.body)

}


module.exports.login = function(req, res) {
        console.log('client loggin in')

        var user_email = req.body.email;

        return models.Clients.findOne({
                where: { email: user_email }

            }).then(function(client) {
                    // console.log(client)
                    console.log('.then after login')

                    if (client === null) {
                        console.log('email not found')
                        res
                            .status(404)
                            .redirect('/')
                    } 


                        bcrypt.compare(req.body.password, client.password, function(err, result) {

                            console.log('result: ' + result)

                                if (result == true) {
                                    console.log("password is correct")

                                    req.session.logged_in = true;
                                    req.session.holder_id = client.id;
                                    req.session.first_name = client.first_name;
                                    req.session.last_name = client.last_name;
                                    req.session.user_email = client.email;


                                } else {
                                    console.log('password incorrect')
                                    res.redirect('/')
                                }

                            })


                        


                })
            }

                module.exports.clientsGetAll = function(req, res) {
                    console.log('view all clients')


                }

                module.exports.clientsGetOne = function(req, res) {
                    console.log('view one client')

                    res
                        .status(202)
                        .json({ "hello": "world" })

                }
