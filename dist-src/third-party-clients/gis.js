"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var _sequelize = require("sequelize");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connectSert = [_fs["default"].readFileSync("aws_skysql_chain.pem", "utf-8")];
var sequelize = new _sequelize.Sequelize(process.env.GIS_DATABASE, process.env.GIS_USER, encodeURIComponent(process.env.GIS_PASSWORD), {
  host: process.env.GIS_SERVER,
  dialect: "mariadb",
  port: 5001,
  dialectOptions: {
    ssl: {
      ca: connectSert
    }
  }
});
var _default = sequelize;
exports["default"] = _default;