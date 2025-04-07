import express from "express";
import { incrementCount } from "../controllers/countController.js";

const router = express.Router();
router.get("/", incrementCount);

export default router;
