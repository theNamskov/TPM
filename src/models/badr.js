import { Sequelize } from "sequelize";
import { TextThemes } from "../constants";

import badrDB from "../third-party-clients/badr";

export const BADRModelNames = {
  citizen: "Citizen",
};

export const badrHeaders = [
  { text: "Birth Cert. No.", value: "certNo" },
  { text: "First Name", value: "fname" },
  { text: "Last Name", value: "lname" },
  { text: "Other Names", value: "othernames" },
  { text: "Date of Birth", value: "dob" },
  { text: "Gender", value: "sex" },
  { text: "Place of Birth/Death", value: "addressOfOccurence" },
  { text: "Father's Name", value: "fatherName" },
  { text: "Father's Contact", value: "fatherPhone" },
  { text: "Mother's Name", value: "motherName" },
  { text: "Mother's Contact", value: "motherPhone" },
  { text: "Certificate Type", value: "" },
  { text: "Date of Registration", value: "createdAt" },
];

const BADR = badrDB.define(BADRModelNames.citizen, {
  certNo: { type: Sequelize.STRING },
  fname: { type: Sequelize.STRING, allowNull: false },
  lname: { type: Sequelize.STRING, allowNull: false },
  othernames: { type: Sequelize.STRING, allowNull: false },
  dob: { type: Sequelize.DATE, allowNull: false },
  sex: { type: Sequelize.STRING, allowNull: false },
  addressOfOccurence: { type: Sequelize.STRING, allowNull: false },
  fatherName: { type: Sequelize.STRING, allowNull: false },
  fatherPhone: { type: Sequelize.STRING },
  motherName: { type: Sequelize.STRING, allowNull: false },
  motherPhone: { type: Sequelize.STRING },
  isAlive: { type: Sequelize.BOOLEAN, allowNull: false },
  createdAt: { type: Sequelize.DATE },
  updatedAt: { type: Sequelize.DATE },
});

BADR.sync({ force: true })
  .then(() =>
    console.log(
      TextThemes.badr(`Births and Deaths Registration tables created\n`)
    )
  )
  .catch((e) => console.error(TextThemes.error(e.message)));

export default BADR;
