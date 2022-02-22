'use strict';
const {
  Model
} = require('sequelize');
const { encrypt, decrypt } = require('../services/cryptr')

module.exports = (sequelize, DataTypes) => {
  class Bank extends Model {
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
  Bank.init({
    userId: DataTypes.UUID,
    name: DataTypes.STRING,
    code: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('code');
        return rawValue ? decrypt(rawValue) : '';
      },
      set(value) {
        this.setDataValue('code', encrypt(value));
      }
    },
    number: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('number');
        return rawValue ? decrypt(rawValue) : '';
      },
      set(value) {
        this.setDataValue('number', encrypt(value));
      }
    },
    bank: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('bank');
        return rawValue ? decrypt(rawValue) : '';
      },
      set(value) {
        this.setDataValue('bank', encrypt(value));
      }
    },
  }, {
    sequelize,
    modelName: 'Bank',
  });
  return Bank;
};
