"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dvlaHeaders = exports.DVLAModelNames = void 0;

var _sequelize = require("sequelize");

var _constants = require("../constants");

var _dvla = _interopRequireDefault(require("../third-party-clients/dvla"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DVLAModelNames = {
  motorist: "Motorist"
};
exports.DVLAModelNames = DVLAModelNames;
var dvlaHeaders = [{
  text: "Birth Cert. No.",
  value: "certNo"
}, {
  text: "License No.",
  value: "licenseNo"
}, {
  text: "Expiry Date",
  value: "expiryDate"
}, {
  text: "Date of Issue",
  value: "createdAt"
}];
exports.dvlaHeaders = dvlaHeaders;

var DVLA = _dvla["default"].define(DVLAModelNames.motorist, {
  certNo: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  licenseNo: {
    type: _sequelize.Sequelize.STRING,
    primaryKey: true
  },
  expiryDate: {
    type: _sequelize.Sequelize.DATE,
    allowNull: false
  },
  createdAt: {
    type: _sequelize.Sequelize.DATE
  },
  updatedAt: {
    type: _sequelize.Sequelize.DATE
  }
});

DVLA.sync({
  force: true
}).then(function () {
  return console.log(_constants.TextThemes.dvla("Drivers and Vehicles Licensing Authority tables created\n"));
})["catch"](function (e) {
  return console.error(_constants.TextThemes.error(e.message));
});
var _default = DVLA;
exports["default"] = _default;