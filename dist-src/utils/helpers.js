"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getLicenseNo = exports.getNhiaNo = exports.getVotersID = exports.getPassportNumber = exports.getBadrID = exports.getRandomRange = exports.getRandomInt = void 0;

var _uuid = require("uuid");

var getRandomInt = function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

exports.getRandomInt = getRandomInt;

var getRandomRange = function getRandomRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

exports.getRandomRange = getRandomRange;

var getBadrID = function getBadrID() {
  return "".concat(getRandomRange(200000, 999999), "-").concat(getRandomRange(3000, 9940), "-").concat(getRandomRange(5000, 7000));
};

exports.getBadrID = getBadrID;

var getPassportNumber = function getPassportNumber() {
  return "G-".concat(getRandomRange(4000000, 9000000));
};

exports.getPassportNumber = getPassportNumber;

var getVotersID = function getVotersID() {
  return (0, _uuid.v4)().split("-", 3).join("-").toUpperCase();
};

exports.getVotersID = getVotersID;

var getNhiaNo = function getNhiaNo() {
  return getRandomRange(23000000, 907000000);
};

exports.getNhiaNo = getNhiaNo;

var getLicenseNo = function getLicenseNo() {
  return (0, _uuid.v4)().split("-", 3).join("-").toUpperCase();
};

exports.getLicenseNo = getLicenseNo;
var _default = {
  getRandomRange: getRandomRange,
  getVotersID: getVotersID,
  getBadrID: getBadrID,
  getPassportNumber: getPassportNumber,
  getNhiaNo: getNhiaNo,
  getLicenseNo: getLicenseNo,
  getRandomInt: getRandomInt
};
exports["default"] = _default;