'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define('Events', {
    event_name: DataTypes.STRING,
    event_date: DataTypes.DATE,
    event_time: DataTypes.DATE,
    event_venue: DataTypes.STRING,
    event_address: DataTypes.STRING,
    event_city: DataTypes.STRING,
    event_state: DataTypes.STRING,
    event_zip: DataTypes.INTEGER,
    event_contact_phone: DataTypes.STRING,
    event_contact_email: DataTypes.STRING,
    event_description: DataTypes.STRING,
    event_website: DataTypes.STRING,
    flyer: DataTypes.BLOB,
    online_price: DataTypes.INTEGER,
    door_price: DataTypes.INTEGER,
    ticket_sales_start: DataTypes.DATE,
    ticket_sales_end: DataTypes.DATE,
    ticket_allotment: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Events;
};