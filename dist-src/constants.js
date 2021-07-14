"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextThemes = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TextThemes = {
  dvla: _chalk["default"].blue,
  gis: _chalk["default"].green,
  badr: _chalk["default"].grey,
  ec: _chalk["default"].yellow,
  nhia: _chalk["default"].cyan,
  error: _chalk["default"].red,
  keyword: _chalk["default"].bgKeyword
};
exports.TextThemes = TextThemes;