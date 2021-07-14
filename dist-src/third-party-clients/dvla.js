"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var _sequelize = require("sequelize");

var sequelize = new _sequelize.Sequelize(process.env.DVLA_DATABASE, process.env.DVLA_USER, encodeURIComponent(process.env.DVLA_PASSWORD), {
  host: process.env.DVLA_SERVER,
  dialect: "mssql",
  dialectOptions: {
    encrypt: true
  }
});
var _default = sequelize;
exports["default"] = _default;