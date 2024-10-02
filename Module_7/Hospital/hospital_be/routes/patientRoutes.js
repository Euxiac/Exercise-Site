import { Router } from "express";
import { fetchPatientsWithoutRecentAppointments, fetchAllPatients, createPatient } from "../controllers/patientController.js";

const router = Router();

// Route to get patients without recent appointments
router.get("/patients", fetchAllPatients);
router.get("/patients-no-appointments", fetchPatientsWithoutRecentAppointments);
router.post('/patients', createPatient);

export default router;
