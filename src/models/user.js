'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.CreditCard, {as: 'creditCard', sourceKey: 'uuid', foreignKey: 'userId' })
      this.hasMany(models.Bank, {as: 'bank', sourceKey: 'uuid', foreignKey: 'userId' })
    }
  };
  User.init({
    uuid: DataTypes.UUID,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userID: DataTypes.STRING, 
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    dob: DataTypes.DATE,
    country: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
