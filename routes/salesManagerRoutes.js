const express = require('express');
const router = express.Router();

// import the modules from the controller
const { manageLabours, addNewLabour, trackInTime, trackOutTime } = require("../controllers/salesManagerController");

// creating the routes
router.get("/manageLabours/:area", manageLabours);
router.post('/addNewLabour', addNewLabour);
router.post('/trackInTime/:uID', trackInTime);
router.post('/trackOutTime/:uID', trackOutTime);

module.exports = router;