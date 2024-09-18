export const fetchPatientsWithoutRecentAppointments = async (req, res) => {
  try {
    const patients = await getPatientsWithoutRecentAppointments();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};