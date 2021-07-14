"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _nia = require("../controllers/nia");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/info", _nia.getTPMInfo);
router.get("/populate/:num", _nia.populateDBs);
var _default = router;
exports["default"] = _default;