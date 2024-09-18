import { Router } from "express";
import { fetchPatientsWithoutRecentAppointments } from "../controllers/patientController.js";

const router = Router();

// Route to get patients without recent appointments
router.get("/patients-no-appointments", fetchPatientsWithoutRecentAppointments);

export default router;
