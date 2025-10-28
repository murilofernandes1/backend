import express from "express";
import auth from "./middleware/auth.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import noticesRoutes from "./routes/noticesRoutes.js";
import alertsRoutes from "./routes/alertsRoutes.js";
import managerRoutes from "./routes/managerRoutes.js";
import authRoutes from "./routes/authRouter.js";
import rhRoutes from "./routes/rhRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", auth, userRoutes);
app.use("/admin", auth, adminRoutes);
app.use("/notices", auth, noticesRoutes);
app.use("/alerts", auth, alertsRoutes);
app.use("/manager", auth, managerRoutes);
app.use("/rh", auth, rhRoutes);

export default app;
