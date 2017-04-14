'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      middle_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      security_question: {
        type: Sequelize.STRING
      },
      security_answer: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      bank_account: {
        type: Sequelize.INTGER
      },
      bank_routing: {
        type: Sequelize.INTEGER
      },
      orginization: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zipcode: {
        type: Sequelize.INTEGER
      },
      debit_card: {
        type: Sequelize.STRING
      },
      expiration: {
        type: Sequelize.STRING
      },
      cvc: {
        type: Sequelize.INTEGER
      },
      facebook_email: {
        type: Sequelize.STRING
      },
      facebook_password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Clients');
  }
};