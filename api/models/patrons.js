'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Patrons = sequelize.define('Patrons', {
    first_name: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    last_name: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    phone_number: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    email: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    password: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },        
    address: {
            type: Sequelize.CHAR(255),
            allowNull: true
        },
    city: {
            type: Sequelize.CHAR(255),
            allowNull: true
        },
    state: {
            type: Sequelize.CHAR(2),
            allowNull: true
        },
    zip: {
            type: Sequelize.INTEGER(5),
            allowNull: true
        },
    age: {
            type: Sequelize.INTEGER(3),
            allowNull: true
        },
    security_question: {
            type: Sequelize.CHAR(255),
            allowNull: true
        },
    security_answer: {
            type: Sequelize.CHAR(255),
            allowNull: true
        },                
    gender: {
            type: Sequelize.CHAR(1),
            allowNull: true
        },
    agreed_terms: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
  }, {
    classMethods: {
      associate: function(models) {
        Patrons.belongsTo(models.Events);
        Patrons.hasMany(models.Tickets);
      }
    }
  });
  return Patrons;
};