const express = require('express');
const { getAvailableBuses, createBus } = require('./busController'); // Adjust the path if necessary

const busRoute = express.Router();

// Get available buses based on from, to, and date
busRoute.get('/', getAvailableBuses);

// Create a new bus
busRoute.post('/', createBus);

// Export the router for use in your main application
module.exports = busRoute;
