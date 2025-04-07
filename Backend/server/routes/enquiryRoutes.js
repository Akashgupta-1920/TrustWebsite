import express from "express";
import  sendEnquiryEmail  from "../controllers/enquiryController.js";

const router = express.Router();

router.post("/", sendEnquiryEmail);

export default router; 
