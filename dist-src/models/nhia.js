"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.nhiaHeaders = exports.NHIAModelNames = void 0;

var _sequelize = require("sequelize");

var _constants = require("../constants");

var _nhia = _interopRequireDefault(require("../third-party-clients/nhia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NHIAModelNames = {
  beneficiary: "Beneficiary"
};
exports.NHIAModelNames = NHIAModelNames;
var nhiaHeaders = [{
  text: "Birth Cert. No.",
  value: "certNo"
}, {
  text: "Membership No.",
  value: "membershipNo"
}, {
  text: "Expiry Date",
  value: "expiryDate"
}, {
  text: "Date of Issue",
  value: "createdAt"
}];
exports.nhiaHeaders = nhiaHeaders;

var NHIA = _nhia["default"].define(NHIAModelNames.beneficiary, {
  certNo: {
    type: _sequelize.Sequelize.STRING
  },
  membershipNo: {
    type: _sequelize.Sequelize.STRING
  },
  expiryDate: {
    type: _sequelize.Sequelize.DATE
  },
  createdAt: {
    type: _sequelize.Sequelize.DATE
  },
  updatedAt: {
    type: _sequelize.Sequelize.DATE
  }
});

NHIA.sync({
  force: true
}).then(function () {
  return console.log(_constants.TextThemes.nhia("National Health Insurance Authority tables created\n"));
})["catch"](function (e) {
  return console.error(_constants.TextThemes.error(e.message));
});
var _default = NHIA;
exports["default"] = _default;