import express from "express";
import SeeFops from "../controllers/rh/Fop/SeeFops.js";
import Departments from "../controllers/rh/Department/Departments.js";
import UpdateDepartment from "../controllers/rh/Department/UpdateDepartment.js";
import Alert from "../controllers/rh/Alerts/Alert.js";
import Register from "../controllers/rh/Register/Register.js";
import NewNotice from "../controllers/rh/Notices/NewNotice.js";
const router = express.Router();

router.use("/fop", SeeFops);
router.use("/departments", Departments);
router.use("/departments/:userId/:departmentId", UpdateDepartment);
router.use("/alerts", Alert);
router.use("/register", Register);
router.use("/notices", NewNotice);

export default router;
