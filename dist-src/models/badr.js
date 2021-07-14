"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.badrHeaders = exports.BADRModelNames = void 0;

var _sequelize = require("sequelize");

var _constants = require("../constants");

var _badr = _interopRequireDefault(require("../third-party-clients/badr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BADRModelNames = {
  citizen: "Citizen"
};
exports.BADRModelNames = BADRModelNames;
var badrHeaders = [{
  text: "Birth Cert. No.",
  value: "certNo"
}, {
  text: "First Name",
  value: "fname"
}, {
  text: "Last Name",
  value: "lname"
}, {
  text: "Other Names",
  value: "othernames"
}, {
  text: "Date of Birth",
  value: "dob"
}, {
  text: "Gender",
  value: "sex"
}, {
  text: "Place of Birth/Death",
  value: "addressOfOccurence"
}, {
  text: "Father's Name",
  value: "fatherName"
}, {
  text: "Father's Contact",
  value: "fatherPhone"
}, {
  text: "Mother's Name",
  value: "motherName"
}, {
  text: "Mother's Contact",
  value: "motherPhone"
}, {
  text: "Certificate Type",
  value: ""
}, {
  text: "Date of Registration",
  value: "createdAt"
}];
exports.badrHeaders = badrHeaders;

var BADR = _badr["default"].define(BADRModelNames.citizen, {
  certNo: {
    type: _sequelize.Sequelize.STRING
  },
  fname: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  lname: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  othernames: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  dob: {
    type: _sequelize.Sequelize.DATE,
    allowNull: false
  },
  sex: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  addressOfOccurence: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  fatherName: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  fatherPhone: {
    type: _sequelize.Sequelize.STRING
  },
  motherName: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  motherPhone: {
    type: _sequelize.Sequelize.STRING
  },
  isAlive: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false
  },
  createdAt: {
    type: _sequelize.Sequelize.DATE
  },
  updatedAt: {
    type: _sequelize.Sequelize.DATE
  }
});

BADR.sync({
  force: true
}).then(function () {
  return console.log(_constants.TextThemes.badr("Births and Deaths Registration tables created\n"));
})["catch"](function (e) {
  return console.error(_constants.TextThemes.error(e.message));
});
var _default = BADR;
exports["default"] = _default;