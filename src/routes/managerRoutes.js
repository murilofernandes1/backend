import express from "express";
import PendingFops from "../controllers/manager/Fop/PendingFops.js";
const router = express.Router();

router.use("/fop/:id", PendingFops);
export default router;
