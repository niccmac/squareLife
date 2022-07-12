// ENV vars

require("dotenv").config(); // Environment variable config
module.exports = {
  port: parseInt(process.env.PORT),
  dbuser: process.env.DB_USER,
  dbport: process.env.DB_PORT,
  dbname: process.env.DB_NAME,
  dbhost: process.env.DB_HOST,
  dbpassword: process.env.DB_PASSWORD,
};
