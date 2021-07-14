import express from "express";

import { getAllNHIAInfo } from "../controllers/nhia";

const router = express.Router();

router.get("/data", getAllNHIAInfo);

export default router;
