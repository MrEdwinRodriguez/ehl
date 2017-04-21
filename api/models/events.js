'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define('Events', {
    event_name: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    event_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
    event_time: {
            type: Sequelize.CHAR(30),
            allowNull: false
        },
    event_venue: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    event_address: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    event_city: {
            type: Sequelize.CHAR(255),
            allowNull: true
        },
    event_state: {
            type: Sequelize.CHAR(2),
            allowNull: true
        },
    event_zip: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    event_contact_phone: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    event_contact_email: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    event_description: {
            type: Sequelize.STRING,
            allowNull: false
        },
    event_website: {
            type: Sequelize.CHAR(255),
            allowNull: false
        },
    flyer: DataTypes.BLOB,
    online_price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
    door_price: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
    ticket_sales_start: {
            type: Sequelize.DATE,
            allowNull: false
        },
    ticket_sales_end: {
            type: Sequelize.DATE,
            allowNull: false
        },
    ticket_allotment: {
            type: Sequelize.INTEGER,
            allowNull: false
     }   
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Events;
};