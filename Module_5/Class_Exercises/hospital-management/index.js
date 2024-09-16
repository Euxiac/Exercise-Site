const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");

// Initialize the app
const app = express();
const port = 8000;

// Middleware to parse JSON requests
app.use(bodyParser.json());
// Define raw SQL queries
const queries = {
  getAllPatients: "SELECT * FROM Patients",
  getUnder30: "SELECT * FROM Patients WHERE age > 30",

  addPatient:
    "INSERT INTO Patients (name, age, gender, address, phone) VALUES (?, ?, ?, ?, ?)",
};

const perscriptionQueries = {
  getPerscriptionsOver30: "SELECT * FROM hospital.prescriptions JOIN patients USING (PATIENT_ID) WHERE AGE > 30",
}

const appoinmentQueries  = {
  getAllAppointments: "SELECT * FROM Appointments",
  getAppoinmentsByInterval: `SELECT appointment_id, patient_id FROM appointments WHERE DATE_SUB(CURDATE(),INTERVAL 30 Day) <= now();`,
}



//ENDPOINTS!!
// Get all patients
app.get("/patients", async (req, res) => {
  try {
    const [results] = await sequelize.query(queries.getAllPatients);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/getPresciptionsOver30", async (req, res) => {
  try {
    const [results] = await sequelize.query(perscriptionQueries.getPresciptionsOver30);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all patients under30
app.get("/patients_under_30", async (req, res) => {
  try {
    const [results] = await sequelize.query(queries.getUnder30);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all appointments
app.get("/appointments", async (req, res) => {
  try {
    const [results] = await sequelize.query(appoinmentQueries.getAllAppointments);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get appointments between
app.get("/appointments_30days", async (req, res) => {
  try {
    const [results] = await sequelize.query(queries.getAppointmentByInterval);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new patient
app.post("/patients", async (req, res) => {
  const { name, age, gender, address, phone } = req.body;
  try {
    const [result] = await sequelize.query(queries.addPatient, {
      replacements: [name, age, gender, address, phone],
      type: sequelize.QueryTypes.INSERT,
    });
    res.status(201).json({ patient_id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Sync the database and start the server
sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
