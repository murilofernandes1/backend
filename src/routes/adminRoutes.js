import express from "express";
import City from "../controllers/admin/City/City.js";
import UpdateCity from "../controllers/admin/City/UpdateCity.js";
const router = express.Router();

router.use("/city", City);
router.use("/city/userId/cityId", UpdateCity);

export default router;
