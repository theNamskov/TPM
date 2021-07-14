"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var _sequelize = require("sequelize");

var sequelize = new _sequelize.Sequelize(process.env.BADR_DATABASE, process.env.BADR_USER, encodeURIComponent(process.env.BADR_PASSWORD), {
  host: process.env.BADR_SERVER,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});
var _default = sequelize;
exports["default"] = _default;