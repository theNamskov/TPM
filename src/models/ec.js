import { Sequelize } from "sequelize";
import { TextThemes } from "../constants";

import ecDB from "../third-party-clients/ec";

export const ECModelNames = {
  citizen: "Citizen",
};

export const ecHeaders = [
  { text: "Birth Cert. No.", value: "certNo" },
  { text: "Voter ID", value: "voterID" },
  { text: "Polling Station Code", value: "pollingStationCode" },
  { text: "Registration Date", value: "createdAt" },
];

const EC = ecDB.define(ECModelNames.citizen, {
  certNo: { type: Sequelize.STRING },
  voterID: { type: Sequelize.STRING },
  pollingStationCode: { type: Sequelize.STRING },
  createdAt: { type: Sequelize.DATE },
  updatedAt: { type: Sequelize.DATE },
});

EC.sync({ force: true })
  .then(() =>
    console.log(TextThemes.ec(`Electoral Commission tables created\n`))
  )
  .catch((e) => console.error(TextThemes.error(e.message)));

export default EC;
