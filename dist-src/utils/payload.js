"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.generateBADREntry = exports.generateNHIAEntry = exports.generateECEntry = exports.generateGISEntry = exports.generateDVLAEntry = void 0;

var _faker = _interopRequireDefault(require("faker"));

var _badr = _interopRequireDefault(require("../models/badr"));

var _dvla = _interopRequireDefault(require("../models/dvla"));

var _ec = _interopRequireDefault(require("../models/ec"));

var _nhia = _interopRequireDefault(require("../models/nhia"));

var _gis = _interopRequireDefault(require("../models/gis"));

var _helpers = _interopRequireDefault(require("./helpers"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var generateDVLAEntry = function generateDVLAEntry() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var certNos = arguments.length > 1 ? arguments[1] : undefined;
  var data = [];

  for (var i = 0; i < num; ++i) {
    data.push({
      certNo: certNos[i],
      licenseNo: _helpers["default"].getLicenseNo(),
      expiryDate: _faker["default"].date.future()
    });
  }

  return data;
};

exports.generateDVLAEntry = generateDVLAEntry;

var generateGISEntry = function generateGISEntry() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var certNos = arguments.length > 1 ? arguments[1] : undefined;
  var data = [];

  for (var i = 0; i < num; ++i) {
    data.push({
      certNo: certNos[i],
      passportID: _helpers["default"].getPassportNumber(),
      expiryDate: _faker["default"].date.future(),
      nationality: _faker["default"].address.country()
    });
  }

  return data;
};

exports.generateGISEntry = generateGISEntry;

var generateECEntry = function generateECEntry() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var certNos = arguments.length > 1 ? arguments[1] : undefined;
  var data = [];

  for (var i = 0; i < num; ++i) {
    data.push({
      certNo: certNos[i],
      voterID: _helpers["default"].getVotersID(),
      pollingStationCode: _helpers["default"].getPassportNumber()
    });
  }

  return data;
};

exports.generateECEntry = generateECEntry;

var generateNHIAEntry = function generateNHIAEntry() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var certNos = arguments.length > 1 ? arguments[1] : undefined;
  var data = [];

  for (var i = 0; i < num; ++i) {
    data.push({
      certNo: certNos[0],
      membershipNo: _helpers["default"].getNhiaNo(),
      expiryDate: _faker["default"].date.future()
    });
  }

  return data;
};

exports.generateNHIAEntry = generateNHIAEntry;

var generateBADREntry = function generateBADREntry() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var data = [];

  for (var i = 0; i < num; ++i) {
    var surname = _faker["default"].name.lastName();

    data.push({
      certNo: _helpers["default"].getBadrID(),
      fname: _faker["default"].name.firstName(),
      lname: surname,
      othernames: _faker["default"].name.middleName(),
      dob: _faker["default"].date.past(),
      sex: _faker["default"].name.gender(),
      addressOfOccurence: _faker["default"].address.streetAddress(),
      fatherName: "".concat(_faker["default"].name.firstName(0), " ").concat(surname),
      fatherPhone: _faker["default"].phone.phoneNumber(),
      motherName: "".concat(_faker["default"].name.firstName(1), " ").concat(surname),
      motherPhone: _faker["default"].phone.phoneNumber(),
      isAlive: i % 2 ? false : true
    });
  }

  return data;
};

exports.generateBADREntry = generateBADREntry;

var populate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var num,
        badrFakes,
        badrRes,
        certNos,
        gisFakes,
        nhiaFakes,
        dvlaFakes,
        ecFakes,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            num = _args.length > 0 && _args[0] !== undefined ? _args[0] : 5;
            badrFakes = generateBADREntry(num);
            _context.prev = 2;
            _context.next = 5;
            return _badr["default"].bulkCreate(badrFakes);

          case 5:
            badrRes = _context.sent;
            console.log("\n\n\n\n\n\n\n\n", "This is the badr data \n\n\n", badrRes);
            certNos = badrRes.map(function (data) {
              return data.dataValues.certNo;
            });
            console.log("\n\n\n\n\n", "This is the certificate No\n\n\n", certNos);
            gisFakes = generateGISEntry(_helpers["default"].getRandomRange(1, Math.floor(num / 2)), certNos), nhiaFakes = generateNHIAEntry(_helpers["default"].getRandomRange(1, Math.floor(num / 2)), certNos), dvlaFakes = generateDVLAEntry(_helpers["default"].getRandomRange(1, Math.floor(num / 2)), certNos), ecFakes = generateECEntry(_helpers["default"].getRandomRange(1, Math.floor(num / 2)), certNos);
            console.log("\n\n\nThese are the nhia fakes\n\n\n", nhiaFakes);
            _context.next = 13;
            return _dvla["default"].bulkCreate(dvlaFakes);

          case 13:
            _context.next = 15;
            return _gis["default"].bulkCreate(gisFakes);

          case 15:
            _context.next = 17;
            return _nhia["default"].bulkCreate(nhiaFakes);

          case 17:
            _context.next = 19;
            return _ec["default"].bulkCreate(ecFakes);

          case 19:
            return _context.abrupt("return", badrFakes.length + gisFakes.length + nhiaFakes.length + dvlaFakes.length + ecFakes.length);

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](2);
            console.error(_constants.TextThemes.error("An error occured in population of data: ".concat(_context.t0.message)));

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 22]]);
  }));

  return function populate() {
    return _ref.apply(this, arguments);
  };
}();

var _default = populate;
exports["default"] = _default;