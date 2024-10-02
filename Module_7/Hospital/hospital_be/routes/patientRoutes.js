const { Router } = require('express');
const { fetchPatientsWithoutRecentAppointments, fetchAllPatients, createPatient } = require("../controllers/patientController.js");

const router = Router();

// Route to get patients without recent appointments
router.get("/", fetchAllPatients);
router.get("/patients-no-appointments", fetchPatientsWithoutRecentAppointments);
router.post('/', createPatient);

module.exports = router;