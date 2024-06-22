const express = require('express');
const { createBooking, getBookings } = require('../routes/bookingController'); // Adjust the path if necessary

const router = express.Router();

router.post('/', createBooking);
router.get('/', getBookings);

module.exports = router;
