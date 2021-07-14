"use strict";

require("dotenv/config");

require("regenerator-runtime/runtime.js");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _constants = require("./constants");

var _badr = _interopRequireDefault(require("./third-party-clients/badr"));

var _ec = _interopRequireDefault(require("./third-party-clients/ec"));

var _dvla = _interopRequireDefault(require("./third-party-clients/dvla"));

var _gis = _interopRequireDefault(require("./third-party-clients/gis"));

var _nhia = _interopRequireDefault(require("./third-party-clients/nhia"));

var _dvla2 = _interopRequireDefault(require("./routes/dvla"));

var _gis2 = _interopRequireDefault(require("./routes/gis"));

var _nhia2 = _interopRequireDefault(require("./routes/nhia"));

var _badr2 = _interopRequireDefault(require("./routes/badr"));

var _ec2 = _interopRequireDefault(require("./routes/ec"));

var _nia = _interopRequireDefault(require("./routes/nia"));

var _responses = _interopRequireDefault(require("./utils/responses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_badr["default"].authenticate().then(function () {
  return console.info(_constants.TextThemes.badr("Births and Deaths Registry connected on ".concat(new Date(), "\n")));
})["catch"](function (e) {
  return console.error(_constants.TextThemes.error("\nThis is the BaDR's error message: ".concat(_constants.TextThemes.badr(e.message), "\n")));
});

_ec["default"].authenticate().then(function () {
  return console.info(_constants.TextThemes.ec("Electoral Commission connected on ".concat(new Date(), "\n")));
})["catch"](function (e) {
  return console.error(_constants.TextThemes.error("\nThis is the EC's error message: ".concat(_constants.TextThemes.ec(e.message), "\n")));
});

_dvla["default"].authenticate().then(function () {
  return console.info(_constants.TextThemes.dvla("Drivers and Vehicle Licensing Authority connected on ".concat(new Date(), "\n")));
})["catch"](function (e) {
  return console.error(_constants.TextThemes.error("\nThis is the DVLA's error message: ".concat(_constants.TextThemes.dvla(e.message), "\n")));
});

_gis["default"].authenticate().then(function () {
  return console.info(_constants.TextThemes.gis("Ghana Immigration Service connected on ".concat(new Date(), "\n")));
})["catch"](function (e) {
  return console.error(_constants.TextThemes.error("\nThis is GIS's error message: ".concat(_constants.TextThemes.gis(e.message), "\n")));
});

_nhia["default"].authenticate().then(function () {
  return console.info(_constants.TextThemes.nhia("National Health Insurance Authority connected on ".concat(new Date(), "\n")));
})["catch"](function (e) {
  return console.error(_constants.TextThemes.error("\nThis is NHIA's error message: ".concat(_constants.TextThemes.nhia(e.message), "\n")));
}); // Express


var app = (0, _express["default"])();
app.set("trust proxy", "loopback, linklocal, uniquelocal");
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); // const whitelist = ["http://localhost:8081"];

var options = {
  // origin: (origin, callback) => {
  //     if (whitelist.indexOf(origin) !== -1) {
  //         callback(null, true)
  //       } else {
  //         callback(new Error('Not allowed by CORS'))
  //       }
  // },
  origin: function origin(_origin, callback) {
    return callback(null, true);
  },
  credentials: true,
  exposedHeaders: ["set-cookie", "eTag", "date"]
};
app.use((0, _cors["default"])(options));
app.get("/", function (req, res) {
  return res.json({
    status: 1,
    msg: "Yawa no dey"
  });
});
app.use("/v1/dvla", _dvla2["default"]);
app.use("/v1/nhia", _nhia2["default"]);
app.use("/v1/gis", _gis2["default"]);
app.use("/v1/ec", _ec2["default"]);
app.use("/v1/badr", _badr2["default"]);
app.use("/v1/nia", _nia["default"]);
app.use(function (req, res) {
  return _responses["default"].notFoundResponse(res);
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  return console.log("Listening on PORT ".concat(PORT, "\n"));
});