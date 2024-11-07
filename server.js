const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const dbConnect = require('./config/db');

// Load the config from env
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Establish connection to the database
dbConnect();

// __________Import the Routes__________

// Sales Manager Routes
const salesManagerRoutes = require('./routes/salesManagerRoutes');
app.use('/salesManager', salesManagerRoutes);

// Admin routes
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);

// HR routes
const hrRoutes = require('./routes/hrRoutes');
app.use('/hr', hrRoutes);

// Listen to the port
app.listen(PORT, ()=>{
    console.log(`Server started at PORT ${PORT}`)
});