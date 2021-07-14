"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.gisHeaders = exports.GISModelNames = void 0;

var _sequelize = require("sequelize");

var _constants = require("../constants");

var _gis = _interopRequireDefault(require("../third-party-clients/gis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GISModelNames = {
  passport: "Passport"
};
exports.GISModelNames = GISModelNames;
var gisHeaders = [{
  text: "Birth Cert. No.",
  value: "certNo"
}, {
  text: "Passport ID",
  value: "passportID"
}, {
  text: "Expiry Date",
  value: "expiryDate"
}, {
  text: "Nationality",
  value: "nationality"
}, {
  text: "Date of Issue",
  value: "createdAt"
}];
exports.gisHeaders = gisHeaders;

var GIS = _gis["default"].define(GISModelNames.passport, {
  certNo: {
    type: _sequelize.Sequelize.STRING
  },
  passportID: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  expiryDate: {
    type: _sequelize.Sequelize.DATE,
    allowNull: false
  },
  nationality: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    type: _sequelize.Sequelize.DATE
  },
  updatedAt: {
    type: _sequelize.Sequelize.DATE
  }
});

GIS.sync({
  force: true
}).then(function () {
  return console.log(_constants.TextThemes.gis("Ghana Immigration Service tables created\n"));
})["catch"](function (e) {
  return console.error(_constants.TextThemes.error(e.message));
});
var _default = GIS;
exports["default"] = _default;