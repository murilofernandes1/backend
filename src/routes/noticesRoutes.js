import express from "express";
import NewNotice from "../controllers/admin/Notices/NewNotice.js";
import SeeNotices from "../controllers/private/Notices/SeeNotices.js";
const router = express.Router();

router.use("/", NewNotice);
router.use("/", SeeNotices);
export default router;
