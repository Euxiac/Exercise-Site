import express from "express";
import bodyParser from "body-parser";
import sequelize from "./config/database.js";
import patientRoutes from "./routes/patientRoutes.js";

// Initialize the app
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(express.json()); // To parse JSON request body

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins or specify domain
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Define the routes
app.use("/api", patientRoutes);

// Sync the database and start the server
(async () => {
  try {
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err.message);
  }
})();
