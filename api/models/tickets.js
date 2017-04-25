'use strict';

var Sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {
  var Tickets = sequelize.define('Tickets', {
    first_name: {
            type: Sequelize.CHAR(255),
            allowNull: true
        },
    last_name: {
            type: Sequelize.CHAR(255),
            allowNull: true
        },
    ticket_number: {
            type: Sequelize.CHAR(255),
            allowNull: false
        }
  }, {
    classMethods: {
      associate: function(models) {
        Tickets.belongsTo(models.Patrons);
        Tickets.belongsTo(models.Clients);
      }
    }
  });
  return Tickets;
};