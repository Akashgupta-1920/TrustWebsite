import express from "express";
import sendContactUsEmail from "../controllers/contactController.js";

const router = express.Router();

router.post("/", sendContactUsEmail);

export default router;
