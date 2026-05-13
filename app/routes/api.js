import { Router } from "express";
import EmployeeController from "../controllers/employeeController";

const router = Router();

router.get("/employees", EmployeeController.index);
router.post("/employees", EmployeeController.store);

export default router;
