'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Clients = sequelize.define('Clients', {
    first_name: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    last_name: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    middle_name: {
            type: Sequelize.CHAR(1),
            allowNull: true
        },
    email: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    phone_number: {
            type: Sequelize.CHAR(30),
            allowNull: false
        },
    security_question: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    security_answer: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    password: {
            type: Sequelize.CHAR(30),
            allowNull: false
        },
    bank_account: {
            type: Sequelize.CHAR(255),
            allowNull: true
        },
    bank_routing: {
            type: Sequelize.CHAR(10),
            allowNull: true
        },
    orginization: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    address: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    city: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    state: {
            type: Sequelize.CHAR(2),
            allowNull: false
        },
    zipcode: {
            type: Sequelize.INTEGER(5),
            allowNull: false
        },
    debit_card:{
            type: Sequelize.CHAR(30),
            allowNull: true
        },
    expiration: {
            type: Sequelize.CHAR(30),
            allowNull: true
        },
    cvc: {
            type: Sequelize.INTEGER(3),
            allowNull: true
        },
    facebook_email: {
            type: Sequelize.CHAR(255),
            allowNull: true
        },
    facebook_password: {
            type: Sequelize.CHAR(255),
            allowNull: true
        }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Clients;
};