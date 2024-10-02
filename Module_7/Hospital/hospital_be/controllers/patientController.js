import { getAllPatients, addNewPatient, getPatientsWithoutRecentAppointments } from '../services/patientService.js';

export const fetchAllPatients = async (req, res) => {
  try {
    console.log('Fetching allPatients');
    const patients = await getAllPatients();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const fetchPatientsWithoutRecentAppointments = async (req, res) => {
  try {
    const patients = await getPatientsWithoutRecentAppointments();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const createPatient = async (req, res) => {
  try {
    
    const { name, age, gender } = req.body; // Expect name, age, and gender in the request body

    if (!name || !age || !gender) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newPatient = await addNewPatient(name, age, gender); // Call service to add the patient

    res.status(201).json(newPatient); // Return the created patient object with 201 status
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};