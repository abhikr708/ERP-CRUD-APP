const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const dbConnect = require('./config/db');
const possport = require('passport');
const LocalStrategy =  require('passport-local').Strategy;

// Load the config from env
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Middleware Function
const logRequest = (req, res, next)=>{
    console.log(`${new Date().toLocaleString()}, Request Made to: ${req.originalUrl}`);
    next(); // move to the next phase
}

// Establish connection to the database
dbConnect();

// _______Routes_______
app.use(logRequest);
app.get('/', (req, res)=>{
    res.send("WELCOME....");
})

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