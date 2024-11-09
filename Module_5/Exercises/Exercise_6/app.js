const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('public'))

// map all routes to the express app
const calculatorRoutes = require('./routes/calculatorRoutes');
app.use('/calculator', calculatorRoutes);

// export the app
module.exports = app;