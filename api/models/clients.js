'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Clients = sequelize.define('Clients', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    security_question: DataTypes.STRING,
    security_answer: DataTypes.STRING,
    password: DataTypes.STRING,
    bank_account: DataTypes.INTGER,
    bank_routing: DataTypes.INTEGER,
    orginization: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    debit_card: DataTypes.STRING,
    expiration: DataTypes.STRING,
    cvc: DataTypes.INTEGER,
    facebook_email: DataTypes.STRING,
    facebook_password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Clients;
};