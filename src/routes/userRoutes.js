import express from "express";
import Me from "../controllers/user/Me/User.js";
import auth from "../middleware/auth.js";
import Fop from "../controllers/user/Fop/FOP.js";
import MyFops from "../controllers/user/Fop/MyFops.js";
const router = express.Router();

router.use("/me", auth, Me);
router.use("/fop", auth, Fop);
router.use("/fop", auth, MyFops);
export default router;
