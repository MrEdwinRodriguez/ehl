var mysql = require('mysql');
var models = require('../models');
var bcrypt = require('bcrypt-nodejs');



module.exports.register = function(req, res) {
    console.log('patron being registered')

    var password = req.body.password;
    console.log(req.body)

    return models.Patrons.create({
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
        agreed_terms: req.body.terms,
        security_question: req.body.question,
        security_answer: req.body.answer


    })

    res
        .status(200)
        .json(req.body)

}

module.exports.login = function(req, res) {
    console.log('patron loggin in')

    var user_email = req.body.user_email;
    var password = req.body.user_password;

    console.log(user_email)

    return models.Patrons.findOne({
        where: { email: user_email }

    }).then(function(patron) {
        // console.log(client)
        console.log('.then after login')

        if (patron === null) {
            console.log('email not found')
            res
                .status(404)
                .redirect('/')
        }

        console.log(password)
        bcrypt.compare(password, patron.password, function(err, result) {

            console.log('result: ' + result)

            if (result == true) {
                console.log("password is correct")

                req.session.logged_in = true;
                req.session.client_id = patron.id;
                req.session.first_name = patron.first_name;
                req.session.last_name = patron.last_name;
                req.session.user_email = patron.email;


            } else {
                console.log('password incorrect')
                res.redirect('/')
            }

        })

    })
}



