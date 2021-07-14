import { Sequelize } from "sequelize";
import { TextThemes } from "../constants";

import gisDB from "../third-party-clients/gis";

export const GISModelNames = {
  passport: "Passport",
};

export const gisHeaders = [
  { text: "Birth Cert. No.", value: "certNo" },
  { text: "Passport ID", value: "passportID" },
  { text: "Expiry Date", value: "expiryDate" },
  { text: "Nationality", value: "nationality" },
  { text: "Date of Issue", value: "createdAt" },
];

const GIS = gisDB.define(GISModelNames.passport, {
  certNo: { type: Sequelize.STRING },
  passportID: { type: Sequelize.STRING, allowNull: false },
  expiryDate: { type: Sequelize.DATE, allowNull: false },
  nationality: { type: Sequelize.STRING, allowNull: false },
  createdAt: { type: Sequelize.DATE },
  updatedAt: { type: Sequelize.DATE },
});

GIS.sync({ force: true })
  .then(() =>
    console.log(TextThemes.gis(`Ghana Immigration Service tables created\n`))
  )
  .catch((e) => console.error(TextThemes.error(e.message)));

export default GIS;
