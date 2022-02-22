'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaction.init({
    transactionId: DataTypes.UUID,
    userId: DataTypes.UUID,
    category: DataTypes.STRING,
    company: DataTypes.STRING,
    sourceCur: DataTypes.STRING,
    targetCur: DataTypes.STRING,
    rate: DataTypes.STRING,
    amount: DataTypes.STRING,
    billRefNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};
