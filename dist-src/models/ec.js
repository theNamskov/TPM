"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ecHeaders = exports.ECModelNames = void 0;

var _sequelize = require("sequelize");

var _constants = require("../constants");

var _ec = _interopRequireDefault(require("../third-party-clients/ec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ECModelNames = {
  citizen: "Citizen"
};
exports.ECModelNames = ECModelNames;
var ecHeaders = [{
  text: "Birth Cert. No.",
  value: "certNo"
}, {
  text: "Voter ID",
  value: "voterID"
}, {
  text: "Polling Station Code",
  value: "pollingStationCode"
}, {
  text: "Registration Date",
  value: "createdAt"
}];
exports.ecHeaders = ecHeaders;

var EC = _ec["default"].define(ECModelNames.citizen, {
  certNo: {
    type: _sequelize.Sequelize.STRING
  },
  voterID: {
    type: _sequelize.Sequelize.STRING
  },
  pollingStationCode: {
    type: _sequelize.Sequelize.STRING
  },
  createdAt: {
    type: _sequelize.Sequelize.DATE
  },
  updatedAt: {
    type: _sequelize.Sequelize.DATE
  }
});

EC.sync({
  force: true
}).then(function () {
  return console.log(_constants.TextThemes.ec("Electoral Commission tables created\n"));
})["catch"](function (e) {
  return console.error(_constants.TextThemes.error(e.message));
});
var _default = EC;
exports["default"] = _default;