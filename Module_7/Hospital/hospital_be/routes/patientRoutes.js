const { Router } = require('express');
const { fetchPatientsWithoutRecentAppointments, fetchAllPatients, createPatient } = require("../controllers/patientController.js");

const router = Router();

// Route to get patients without recent appointments
router.get("/patients", fetchAllPatients);
router.get("/patients-no-appointments", fetchPatientsWithoutRecentAppointments);
router.post('/patients', createPatient);

module.exports = router;