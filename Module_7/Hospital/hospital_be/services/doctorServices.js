const sequelize = require("../config/database");

const getAllDoctors = async () => {
    try {
        const [results] = await sequelize.query(`
          SELECT doctor_id, dr.name as doctor_name, specialty, department_name
            FROM hospital.doctors dr
            JOIN hospital.departments dep  using (department_id);`);
        return results;
      } catch (error) {
        throw new Error(
          `Error fetching all doctors: ${error.message}`
        );
      }
}

module.exports = {getAllDoctors};