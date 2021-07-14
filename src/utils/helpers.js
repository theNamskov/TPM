import { v4 as uuidv4 } from "uuid";

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const getRandomRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getBadrID = () => {
  return `${getRandomRange(200000, 999999)}-${getRandomRange(
    3000,
    9940
  )}-${getRandomRange(5000, 7000)}`;
};

export const getPassportNumber = () => {
  return `G-${getRandomRange(4000000, 9000000)}`;
};

export const getVotersID = () => {
  return uuidv4().split("-", 3).join("-").toUpperCase();
};

export const getNhiaNo = () => {
  return getRandomRange(23000000, 907000000);
};

export const getLicenseNo = () => {
  return uuidv4().split("-", 3).join("-").toUpperCase();
};

export default {
  getRandomRange,
  getVotersID,
  getBadrID,
  getPassportNumber,
  getNhiaNo,
  getLicenseNo,
  getRandomInt,
};
