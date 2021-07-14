import "dotenv/config";
import "regenerator-runtime/runtime.js";
import express from "express";
import cors from "cors";

import { TextThemes } from "./constants";

import badrDB from "./third-party-clients/badr";
import ecDB from "./third-party-clients/ec";
import dvlaDB from "./third-party-clients/dvla";
import gisDB from "./third-party-clients/gis";
import nhiaDB from "./third-party-clients/nhia";

import dvlaRoutes from "./routes/dvla";
import gisRoutes from "./routes/gis";
import nhiaRoutes from "./routes/nhia";
import badrRoutes from "./routes/badr";
import ecRoutes from "./routes/ec";
import niaRoutes from "./routes/nia";

import apiResponses from "./utils/responses";

badrDB
  .authenticate()
  .then(() =>
    console.info(
      TextThemes.badr(`Births and Deaths Registry connected on ${new Date()}\n`)
    )
  )
  .catch((e) =>
    console.error(
      TextThemes.error(
        `\nThis is the BaDR's error message: ${TextThemes.badr(e.message)}\n`
      )
    )
  );

ecDB
  .authenticate()
  .then(() =>
    console.info(
      TextThemes.ec(`Electoral Commission connected on ${new Date()}\n`)
    )
  )
  .catch((e) =>
    console.error(
      TextThemes.error(
        `\nThis is the EC's error message: ${TextThemes.ec(e.message)}\n`
      )
    )
  );

dvlaDB
  .authenticate()
  .then(() =>
    console.info(
      TextThemes.dvla(
        `Drivers and Vehicle Licensing Authority connected on ${new Date()}\n`
      )
    )
  )
  .catch((e) =>
    console.error(
      TextThemes.error(
        `\nThis is the DVLA's error message: ${TextThemes.dvla(e.message)}\n`
      )
    )
  );

gisDB
  .authenticate()
  .then(() =>
    console.info(
      TextThemes.gis(`Ghana Immigration Service connected on ${new Date()}\n`)
    )
  )
  .catch((e) =>
    console.error(
      TextThemes.error(
        `\nThis is GIS's error message: ${TextThemes.gis(e.message)}\n`
      )
    )
  );

nhiaDB
  .authenticate()
  .then(() =>
    console.info(
      TextThemes.nhia(
        `National Health Insurance Authority connected on ${new Date()}\n`
      )
    )
  )
  .catch((e) =>
    console.error(
      TextThemes.error(
        `\nThis is NHIA's error message: ${TextThemes.nhia(e.message)}\n`
      )
    )
  );

// Express
const app = express();

app.set("trust proxy", "loopback, linklocal, uniquelocal");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const whitelist = ["http://localhost:8081"];
const options = {
  // origin: (origin, callback) => {
  //     if (whitelist.indexOf(origin) !== -1) {
  //         callback(null, true)
  //       } else {
  //         callback(new Error('Not allowed by CORS'))
  //       }
  // },
  origin: (origin, callback) => callback(null, true),
  credentials: true,
  exposedHeaders: ["set-cookie", "eTag", "date"],
};

app.use(cors(options));

app.get("/", (req, res) => res.json({ status: 1, msg: "Yawa no dey" }));

app.use("/v1/dvla", dvlaRoutes);

app.use("/v1/nhia", nhiaRoutes);

app.use("/v1/gis", gisRoutes);

app.use("/v1/ec", ecRoutes);

app.use("/v1/badr", badrRoutes);

app.use("/v1/nia", niaRoutes);

app.use((req, res) => {
  return apiResponses.notFoundResponse(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}\n`));
