'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Transactions',
        'rate',
         Sequelize.STRING
       ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        'Transactions',
        'rate',
         Sequelize.STRING
       ),
    ]);
  }
};
