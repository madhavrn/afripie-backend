require('dotenv').config({path: '.env'});

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mysql",
  encryptKey: process.env.CRYPTR_SECRET_KEY
};

module.exports = config;
