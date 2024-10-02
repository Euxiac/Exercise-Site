const {getAllDoctors}= require('../services/doctorServices.js');

const fetchAllDoctors = async (req, res) => {
    try {
      console.log('Fetching allDoctors');
      const doctors = await getAllDoctors();
      res.json(doctors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {fetchAllDoctors};