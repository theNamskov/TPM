import express from "express";

import { getAllGISInfo } from "../controllers/gis";

const router = express.Router();

router.get("/data", getAllGISInfo);

export default router;
