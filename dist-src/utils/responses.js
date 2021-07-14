"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.amgResponseWithData = exports.errorResponseWithData = exports.errorResponseWithMsg = exports.notFoundResponse = exports.successResponseWithMsg = exports.successResponseWithData = void 0;

var successResponseWithData = function successResponseWithData(res, data) {
  return res.json({
    status: 1,
    data: data
  });
};

exports.successResponseWithData = successResponseWithData;

var successResponseWithMsg = function successResponseWithMsg(res, msg) {
  return res.json({
    status: 1,
    msg: msg
  });
};

exports.successResponseWithMsg = successResponseWithMsg;

var notFoundResponse = function notFoundResponse(res) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Requested resource not found.";
  return res.status(404).json({
    status: 0,
    msg: msg
  });
};

exports.notFoundResponse = notFoundResponse;

var errorResponseWithMsg = function errorResponseWithMsg(res, msg) {
  return res.status(400).json({
    status: 0,
    msg: msg
  });
};

exports.errorResponseWithMsg = errorResponseWithMsg;

var errorResponseWithData = function errorResponseWithData(res, error) {
  return res.status(400).json({
    status: 0,
    error: error
  });
};

exports.errorResponseWithData = errorResponseWithData;

var amgResponseWithData = function amgResponseWithData(res, error) {
  var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Error beyond Kontrolll";
  return res.status(500).json({
    status: -1,
    msg: msg,
    error: error
  });
};

exports.amgResponseWithData = amgResponseWithData;
var _default = {
  successResponseWithData: successResponseWithData,
  successResponseWithMsg: successResponseWithMsg,
  notFoundResponse: notFoundResponse,
  errorResponseWithData: errorResponseWithData,
  errorResponseWithMsg: errorResponseWithMsg,
  amgResponseWithData: amgResponseWithData
};
exports["default"] = _default;