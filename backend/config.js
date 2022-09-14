require("dotenv").config();

/** @description - This is the config object which will contain the environment variables */

const config = {
  baseUrl: process.env.BASE_URL || "",
  env: process.env.NODE_ENV,

  serverUrl: `${process.env.SERVER_URL}`,
  port: process.env.PORT,
};

module.exports = config;