const Cryptr = require('cryptr');
const config = require("../config");

const cryptr = new Cryptr(config.encryptKey);

const encrypt = (str) => cryptr.encrypt(str);
const decrypt = (str) => cryptr.decrypt(str);

module.exports = {
  encrypt,
  decrypt
};