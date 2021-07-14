import badrModel, { badrHeaders } from "../models/badr";

import apiResponses from "../utils/responses";

export const getAllBADRInfo = async (req, res) => {
  try {
    const response = await badrModel.findAll();
    return apiResponses.successResponseWithData(res, {
      headers: badrHeaders,
      payload: response,
    });
  } catch (e) {
    return apiResponses.amgResponseWithData(res, error);
  }
};
