const { Router } = require('express');
const {fetchAllDoctors} = require("../controllers/doctorController.js");

const router = Router();

router.get("/", fetchAllDoctors);

module.exports = router;