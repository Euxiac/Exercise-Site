const express = require('express');
const bodyParser = require("body-parser");
const sequelize = require("./config/database");

// Initialize the app
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(express.json()); // To parse JSON request body

// Allow all origins or specify domain
// this bit is about bypassing the CORS policy for local connections. see enable-cors.org
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//ideally line 14-26 should be seperated into controllers/routes and services
// Define raw SQL queries
const queries = {
  getAllPatients: "SELECT * FROM Patients",
};

//endpoints
app.get("/patients", async (req, res) => {
  try {
    const [results] = await sequelize.query(queries.getAllPatients);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Sync the database and start the server
sequelize
  .sync()
  .then(() => {

    app.get('/', (req, res) => {
      res.send('Server Running');
    });

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });