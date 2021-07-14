import gisModel, { gisHeaders } from "../models/gis";

import apiResponses from "../utils/responses";

export const getAllGISInfo = async (req, res) => {
  try {
    const gisRes = await gisModel.findAll();
    return apiResponses.successResponseWithData(res, {
      headers: gisHeaders,
      payload: gisRes,
    });
  } catch (e) {
    return apiResponses.amgResponseWithData(res, e);
  }
};
