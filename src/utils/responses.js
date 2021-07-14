export const successResponseWithData = (res, data) => {
  return res.json({ status: 1, data });
};

export const successResponseWithMsg = (res, msg) => {
  return res.json({ status: 1, msg });
};

export const notFoundResponse = (
  res,
  msg = "Requested resource not found."
) => {
  return res.status(404).json({ status: 0, msg });
};

export const errorResponseWithMsg = (res, msg) => {
  return res.status(400).json({ status: 0, msg });
};

export const errorResponseWithData = (res, error) => {
  return res.status(400).json({ status: 0, error });
};

export const amgResponseWithData = (
  res,
  error,
  msg = "Error beyond Kontrolll"
) => {
  return res.status(500).json({ status: -1, msg, error });
};

export default {
  successResponseWithData,
  successResponseWithMsg,
  notFoundResponse,
  errorResponseWithData,
  errorResponseWithMsg,
  amgResponseWithData,
};
