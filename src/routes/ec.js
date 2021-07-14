import express from "express";

import { getAllECInfo } from "../controllers/ec";

const router = express.Router();

router.get("/data", getAllECInfo);

export default router;
