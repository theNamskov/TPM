import faker from "faker";

import badrModel from "../models/badr";
import dvlaModel from "../models/dvla";
import ecModel from "../models/ec";
import nhiaModel from "../models/nhia";
import gisModel from "../models/gis";

import helpers from "./helpers";
import { TextThemes } from "../constants";

export const generateDVLAEntry = (num = 1, certNos) => {
  const data = [];
  for (let i = 0; i < num; ++i) {
    data.push({
      certNo: certNos[i],
      licenseNo: helpers.getLicenseNo(),
      expiryDate: faker.date.future(),
    });
  }

  return data;
};

export const generateGISEntry = (num = 1, certNos) => {
  const data = [];
  for (let i = 0; i < num; ++i) {
    data.push({
      certNo: certNos[i],
      passportID: helpers.getPassportNumber(),
      expiryDate: faker.date.future(),
      nationality: faker.address.country(),
    });
  }

  return data;
};

export const generateECEntry = (num = 1, certNos) => {
  const data = [];
  for (let i = 0; i < num; ++i) {
    data.push({
      certNo: certNos[i],
      voterID: helpers.getVotersID(),
      pollingStationCode: helpers.getPassportNumber(),
    });
  }

  return data;
};

export const generateNHIAEntry = (num = 1, certNos) => {
  const data = [];
  for (let i = 0; i < num; ++i) {
    data.push({
      certNo: certNos[0],
      membershipNo: helpers.getNhiaNo(),
      expiryDate: faker.date.future(),
    });
  }

  return data;
};

export const generateBADREntry = (num = 1) => {
  const data = [];
  for (let i = 0; i < num; ++i) {
    let surname = faker.name.lastName();
    data.push({
      certNo: helpers.getBadrID(),
      fname: faker.name.firstName(),
      lname: surname,
      othernames: faker.name.middleName(),
      dob: faker.date.past(),
      sex: faker.name.gender(),
      addressOfOccurence: faker.address.streetAddress(),
      fatherName: `${faker.name.firstName(0)} ${surname}`,
      fatherPhone: faker.phone.phoneNumber(),
      motherName: `${faker.name.firstName(1)} ${surname}`,
      motherPhone: faker.phone.phoneNumber(),
      isAlive: i % 2 ? false : true,
    });
  }

  return data;
};

const populate = async (num = 5) => {
  const badrFakes = generateBADREntry(num);
  try {
    const badrRes = await badrModel.bulkCreate(badrFakes);
    console.log("\n\n\n\n\n\n\n\n", "This is the badr data \n\n\n", badrRes);
    let certNos = badrRes.map((data) => data.dataValues.certNo);
    console.log("\n\n\n\n\n", "This is the certificate No\n\n\n", certNos);

    const gisFakes = generateGISEntry(
        helpers.getRandomRange(1, Math.floor(num / 2)),
        certNos
      ),
      nhiaFakes = generateNHIAEntry(
        helpers.getRandomRange(1, Math.floor(num / 2)),
        certNos
      ),
      dvlaFakes = generateDVLAEntry(
        helpers.getRandomRange(1, Math.floor(num / 2)),
        certNos
      ),
      ecFakes = generateECEntry(
        helpers.getRandomRange(1, Math.floor(num / 2)),
        certNos
      );

    console.log("\n\n\nThese are the nhia fakes\n\n\n", nhiaFakes);

    await dvlaModel.bulkCreate(dvlaFakes);
    await gisModel.bulkCreate(gisFakes);
    await nhiaModel.bulkCreate(nhiaFakes);
    await ecModel.bulkCreate(ecFakes);

    return (
      badrFakes.length +
      gisFakes.length +
      nhiaFakes.length +
      dvlaFakes.length +
      ecFakes.length
    );
  } catch (error) {
    console.error(
      TextThemes.error(
        `An error occured in population of data: ${error.message}`
      )
    );
  }
};

export default populate;
