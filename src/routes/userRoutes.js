import express from "express";
import Register from "../controllers/public/users/Register.js";
import Login from "../controllers/public/users/Login.js";
import Me from "../controllers/private/users/Me.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.use("/register", Register);
router.use("/login", Login);
router.use("/me", auth, Me);
export default router;
