import nhiaModel, { nhiaHeaders } from "../models/nhia";

import apiResponses from "../utils/responses";

export const getAllNHIAInfo = async (req, res) => {
  try {
    const nhiaRes = await nhiaModel.findAll();
    return apiResponses.successResponseWithData(res, {
      headers: nhiaHeaders,
      payload: nhiaRes,
    });
  } catch (e) {
    return apiResponses.amgResponseWithData(res, e);
  }
};
