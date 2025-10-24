import express from "express";
import Departments from "../controllers/admin/Department/Departments.js";
import UpdateDepartment from "../controllers/admin/Department/UpdateDepartment.js";
import City from "../controllers/admin/City/City.js";
import UpdateCity from "../controllers/admin/City/UpdateCity.js";
import Alert from "../controllers/admin/Alerts/Alert.js";
const router = express.Router();

router.use("/departments", Departments);
router.use("/departments/:userId/:departmentId", UpdateDepartment);

router.use("/city", City);
router.use("/city/userId/cityId", UpdateCity);

router.use("/alerts", Alert);
export default router;
