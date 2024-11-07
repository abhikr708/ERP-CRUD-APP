const express = require('express');
const router = express.Router();
const hrController = require('../controllers/hrController');

// Import the modules
const {recordAttendance, calculateAttendance, addOrUpdateSalary, viewSalary} = hrController

// Route to mark attendace 
router.post('/recordAttendance', recordAttendance)

// Route to calculate attendance of an employee
router.post('/calculateAttendance/:uID', calculateAttendance);

// Route to add or update salary details for an employee
router.post('/addOrUpdateSalary', addOrUpdateSalary);

// Route to view an employee’s salary details by uID
router.get('/viewSalary/:uID', viewSalary);

// // Route to calculate the total payroll for all employees
// router.get('/calculateTotalPayroll', calculateTotalPayroll);

module.exports = router;
