const { Booking, Passenger, Bus, Route, Schedule, Price } = require('../db/bookingModel'); // Adjust the path if necessary

const createBooking = async (req, res) => {
  const { busId, routeId, scheduleId, passengers, totalPrice } = req.body;
  try {
    const newBooking = await Booking.create({
      busId,
      routeId,
      scheduleId,
      totalPrice,
      bookingDate: new Date()
    });

    const passengerRecords = passengers.map(passenger => ({
      ...passenger,
      bookingId: newBooking.bookingId
    }));

    const newPassengers = await Passenger.bulkCreate(passengerRecords);

    res.status(201).json({ booking: newBooking, passengers: newPassengers });
  } catch (err) {
    console.error("Error while creating booking:", err);
    res.status(500).json({ message: "Error while creating booking" });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [
        { model: Passenger },
        { model: Bus },
        { model: Route },
        { model: Schedule }
      ]
    });

    res.status(200).json(bookings);
  } catch (err) {
    console.error("Error while fetching bookings:", err);
    res.status(500).json({ message: "Error while fetching bookings" });
  }
};

module.exports = { createBooking, getBookings };
