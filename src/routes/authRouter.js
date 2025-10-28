import express from "express";
import Login from "../controllers/auth/users/Login.js";
const router = express.Router();

router.use("/login", Login);

export default router;
