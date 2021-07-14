import { Sequelize } from "sequelize";
import { TextThemes } from "../constants";

import nhiaDB from "../third-party-clients/nhia";

export const NHIAModelNames = {
  beneficiary: "Beneficiary",
};

export const nhiaHeaders = [
  { text: "Birth Cert. No.", value: "certNo" },
  { text: "Membership No.", value: "membershipNo" },
  { text: "Expiry Date", value: "expiryDate" },
  { text: "Date of Issue", value: "createdAt" },
];

const NHIA = nhiaDB.define(NHIAModelNames.beneficiary, {
  certNo: { type: Sequelize.STRING },
  membershipNo: { type: Sequelize.STRING },
  expiryDate: { type: Sequelize.DATE },
  createdAt: { type: Sequelize.DATE },
  updatedAt: { type: Sequelize.DATE },
});

NHIA.sync({ force: true })
  .then(() =>
    console.log(
      TextThemes.nhia(`National Health Insurance Authority tables created\n`)
    )
  )
  .catch((e) => console.error(TextThemes.error(e.message)));

export default NHIA;
