'use strict';
const {
  Model
} = require('sequelize');
const { encrypt, decrypt } = require('../services/cryptr')

module.exports = (sequelize, DataTypes) => {
  class CreditCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey: 'userId'})
    }
  };
  CreditCard.init({
    userId: DataTypes.UUID,
    cardNumber: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('cardNumber');
        return rawValue ? decrypt(rawValue) : '';
      },
      set(value) {
        this.setDataValue('cardNumber', encrypt(value));
      }
    },
    expiryDate: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('expiryDate');
        return rawValue ? decrypt(rawValue) : '';
      },
      set(value) {
        this.setDataValue('expiryDate', encrypt(value));
      }
    },
    cvc: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('cvc');
        return rawValue ? decrypt(rawValue) : '';
      },
      set(value) {
        this.setDataValue('cvc', encrypt(value));
      }
    }
  }, {
    sequelize,
    modelName: 'CreditCard',
  });
  return CreditCard;
};
