const express = require('express');
const router = express.Router();

// import the modules from the controller
const { manageLabours, addNewLabour, trackInTime, trackOutTime } = require("../controllers/salesManagerController");

// creating the routes
router.get("/manageLabours/:area", manageLabours);
router.post('/addNewLabour', addNewLabour);
router.post('/trackInTime/:labourId', trackInTime);
router.post('/trackOutTime/:labourId', trackOutTime);

module.exports = router;