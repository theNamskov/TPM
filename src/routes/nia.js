import express from "express";

import { getTPMInfo, populateDBs } from "../controllers/nia";

const router = express.Router();

router.get("/info", getTPMInfo);

router.get("/populate/:num", populateDBs);

export default router;
