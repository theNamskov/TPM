"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var _sequelize = require("sequelize");

var sequelize = new _sequelize.Sequelize(process.env.EC_DATABASE, process.env.EC_USER, encodeURIComponent(process.env.EC_PASSWORD), {
  host: process.env.EC_SERVER,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 10000
  }
});
var _default = sequelize;
exports["default"] = _default;