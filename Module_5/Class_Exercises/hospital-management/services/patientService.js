import sequelize from "../config/database.js";

export const getPatientsWithoutRecentAppointments = async () => {
  try {
    const [results] = await sequelize.query(`
      SELECT p.patient_id AS patient_id, p.name AS patient_name
      FROM Patients p
      WHERE p.id NOT IN (
        SELECT a.patient_id
        FROM Appointments a
        WHERE a.date >= DATE_SUB(CURDATE(), INTERVAL 1 YEAR)
      )
    `);
    return results;
  } catch (error) {
    throw new Error(
      `Error fetching patients without recent appointments: ${error.message}`
    );
  }
};