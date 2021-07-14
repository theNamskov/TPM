import { Sequelize } from "sequelize";
import { TextThemes } from "../constants";

import dvlaDB from "../third-party-clients/dvla";

export const DVLAModelNames = {
  motorist: "Motorist",
};

export const dvlaHeaders = [
  { text: "Birth Cert. No.", value: "certNo" },
  { text: "License No.", value: "licenseNo" },
  { text: "Expiry Date", value: "expiryDate" },
  { text: "Date of Issue", value: "createdAt" },
];

const DVLA = dvlaDB.define(DVLAModelNames.motorist, {
  certNo: { type: Sequelize.STRING, allowNull: false },
  licenseNo: { type: Sequelize.STRING, primaryKey: true },
  expiryDate: { type: Sequelize.DATE, allowNull: false },
  createdAt: { type: Sequelize.DATE },
  updatedAt: { type: Sequelize.DATE },
});

DVLA.sync({ force: true })
  .then(() =>
    console.log(
      TextThemes.dvla(
        `Drivers and Vehicles Licensing Authority tables created\n`
      )
    )
  )
  .catch((e) => console.error(TextThemes.error(e.message)));

export default DVLA;
