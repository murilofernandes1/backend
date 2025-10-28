import express from "express";
import SeeFops from "../controllers/rh/Fop/SeeFops.js";
import Departments from "../controllers/rh/Department/Departments.js";
import UpdateDepartment from "../controllers/rh/Department/UpdateDepartment.js";
import Alert from "../controllers/rh/Alerts/Alert.js";
import Register from "../controllers/rh/Register/Register.js";
import NewNotice from "../controllers/rh/Notices/NewNotice.js";
const router = express.Router();

router.use("/fop", SeeFops);
router.use("/fop/:id", Approve);
//No fluxo de FOPS, ele passa por 3 estados:
// "Pending", quando é enviado pelo usuário
// "Approved", quando o gestor aprova esta solicitação, ou "Denied" caso ele reprove.
// "Accepted", quando o RH visuzaliza essa solicitação e considera ela no fechamento de ponto.

router.use("/departments", Departments);
router.use("/departments/:userId/:departmentId", UpdateDepartment);
router.use("/alerts", Alert);
router.use("/register", Register);
router.use("/notices", NewNotice);

export default router;
