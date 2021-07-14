"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTPMInfo = exports.populateDBs = void 0;

var _payload = _interopRequireDefault(require("../utils/payload"));

var _responses = _interopRequireDefault(require("../utils/responses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var populateDBs = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$params;

    var num, dataCount;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            num = ((_req$params = req.params) === null || _req$params === void 0 ? void 0 : _req$params.num) || 5;
            _context.prev = 1;
            _context.next = 4;
            return (0, _payload["default"])(num);

          case 4:
            dataCount = _context.sent;
            return _context.abrupt("return", _responses["default"].successResponseWithMsg(res, "All databases populated with a total of ".concat(dataCount, " data entries.")));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", _responses["default"].amgResponseWithData(res, _context.t0));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function populateDBs(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.populateDBs = populateDBs;

var getTPMInfo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _responses["default"].successResponseWithData(res, [{
              name: "Driver and Vehicle Licensing Authority",
              key: "dvla",
              engine: "MsSQL"
            }, {
              name: "Ghana Immigration Service",
              key: "gis",
              engine: "MariaDB"
            }, {
              name: "National Health Insurance Authority",
              key: "nhia",
              engine: "Sqlite"
            }, {
              name: "Births and Deaths Registry",
              key: "badr",
              engine: "PostgreSQL"
            }, {
              name: "Electoral Commission",
              key: "ec",
              engine: "MySQL"
            }]));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getTPMInfo(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTPMInfo = getTPMInfo;