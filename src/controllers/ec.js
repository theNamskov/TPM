import ecModel, { ecHeaders } from "../models/ec";

import apiResponses from "../utils/responses";

export const getAllECInfo = async (req, res) => {
  try {
    const ecRes = await ecModel.findAll();
    return apiResponses.successResponseWithData(res, {
      headers: ecHeaders,
      payload: ecRes,
    });
  } catch (e) {
    return apiResponses.amgResponseWithData(res, e);
  }
};
