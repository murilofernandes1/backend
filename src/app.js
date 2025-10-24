import express from "express";
import auth from "./middleware/auth.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import noticesRoutes from "./routes/noticesRoutes.js";
import alertsRoutes from "./routes/alertsRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/admin", auth, adminRoutes);
app.use("/notices", auth, noticesRoutes);
app.use("/alerts", auth, alertsRoutes);

export default app;
