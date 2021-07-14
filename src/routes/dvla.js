import express from "express";

import { getAllDVLAInfo } from "../controllers/dvla";

const router = express.Router();

router.get("/data", getAllDVLAInfo);

export default router;
