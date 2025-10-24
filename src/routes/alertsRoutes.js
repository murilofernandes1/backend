import express from "express";
import SeeAlerts from "../controllers/private/Alerts/SeeAlerts.js";
const router = express.Router();

router.use("/", SeeAlerts);
export default router;
