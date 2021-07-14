import express from "express";

import { getAllBADRInfo } from "../controllers/badr";

const router = express.Router();

router.get("/data", getAllBADRInfo);

export default router;
