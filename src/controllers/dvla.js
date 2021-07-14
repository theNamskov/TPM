import dvlaModel, { dvlaHeaders } from "../models/dvla";

import apiResponses from "../utils/responses";

export const getAllDVLAInfo = async (req, res) => {
  try {
    const dvlaRes = await dvlaModel.findAll();
    return apiResponses.successResponseWithData(res, {
      headers: dvlaHeader,
      payload: dvlaRes,
    });
  } catch (e) {
    return apiResponses.amgResponseWithData(res, e);
  }
};
