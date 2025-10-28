import express from "express";
import SeeNotices from "../controllers/user/Notices/SeeNotices.js";
const router = express.Router();

router.use("/", SeeNotices);
export default router;
