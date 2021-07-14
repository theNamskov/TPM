"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("dotenv/config");

var _sequelize = require("sequelize");

var sequelize = new _sequelize.Sequelize({
  storage: "".concat(__dirname, "/nhia.sqlite"),
  dialect: "sqlite"
});
var _default = sequelize;
exports["default"] = _default;