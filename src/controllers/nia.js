import populate from "../utils/payload";

import apiResponses from "../utils/responses";

export const populateDBs = async (req, res) => {
  const num = req.params?.num || 5;
  try {
    const dataCount = await populate(num);
    return apiResponses.successResponseWithMsg(
      res,
      `All databases populated with a total of ${dataCount} data entries.`
    );
  } catch (e) {
    return apiResponses.amgResponseWithData(res, e);
  }
};

export const getTPMInfo = async (req, res) => {
  return apiResponses.successResponseWithData(res, [
    {
      name: "Driver and Vehicle Licensing Authority",
      key: "dvla",
      engine: "MsSQL",
    },
    {
      name: "Ghana Immigration Service",
      key: "gis",
      engine: "MariaDB",
    },
    {
      name: "National Health Insurance Authority",
      key: "nhia",
      engine: "Sqlite",
    },
    {
      name: "Births and Deaths Registry",
      key: "badr",
      engine: "PostgreSQL",
    },
    {
      name: "Electoral Commission",
      key: "ec",
      engine: "MySQL",
    },
  ]);
};
