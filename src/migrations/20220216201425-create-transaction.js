'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transactionId: {
        type: Sequelize.UUID
      },
      userId: {
        type: Sequelize.UUID
      },
      category: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      sourceCur: {
        type: Sequelize.STRING
      },
      targetCur: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      billRefNumber: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};