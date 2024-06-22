// // const { Op } = require('sequelize');
// // const { Bus } = require('../db/busModel'); // Adjust the path if necessary

// // const getAvailableBuses = async (req, res) => {
// //   const { from, to, date } = req.query;

// //   if (!from || !to || !date) {
// //     return res.status(400).json({ message: "Missing required query parameters: from, to, date" });
// //   }

// //   try {
// //     const dateObj = new Date(date);

// //     const availableBuses = await Bus.findAll({
// //       where: {
// //         from,
// //         to,
// //         dates: {
// //           [Op.contains]: [dateObj] // Sequelize operator to check if the array contains the date
// //         },
// //         status: 'available'
// //       }
// //     });

// //     if (availableBuses.length > 0) {
// //       res.status(200).json(availableBuses);
// //     } else {
// //       res.status(404).json({ message: "No available buses found" });
// //     }
// //   } catch (err) {
// //     console.error("Error while fetching available buses:", err);
// //     res.status(500).json({ message: "Error while fetching available buses" });
// //   }
// // };

// // const createBus = async (req, res) => {
// //   const data = req.body;
// //   try {
// //     const newBus = await Bus.create(data);
// //     res.status(201).json(newBus);
// //   } catch (err) {
// //     console.error("Error while creating bus:", err);
// //     res.status(500).json({ message: "Error while creating bus" });
// //   }
// // };

// // module.exports = { getAvailableBuses, createBus };


// // const { Op } = require('sequelize');
// // const { Bus, Route, Schedule, Price } = require('../db/busModel'); // Adjust the path if necessary

// // const getAvailableBuses = async (req, res) => {
// //   const { from, to, date } = req.query;

// //   if (!from || !to || !date) {
// //     return res.status(400).json({ message: "Missing required query parameters: from, to, date" });
// //   }

// //   try {
// //     const dateObj = new Date(date);

// //     const availableSchedules = await Schedule.findAll({
// //       include: [
// //         { model: Bus, where: { status: 'available' } },
// //         { model: Route, where: { from, to } },
// //         { model: Price }
// //       ],
// //       where: {
// //         dates: {
// //           [Op.contains]: [dateObj] // Sequelize operator to check if the array contains the date
// //         }
// //       }
// //     });

// //     if (availableSchedules.length > 0) {
// //       res.status(200).json(availableSchedules);
// //     } else {
// //       res.status(404).json({ message: "No available buses found" });
// //     }
// //   } catch (err) {
// //     console.error("Error while fetching available buses:", err);
// //     res.status(500).json({ message: "Error while fetching available buses" });
// //   }
// // };

// // const createBus = async (req, res) => {
// //   const { bus, route, schedule, price } = req.body;
// //   try {
// //     const newBus = await Bus.create(bus);
// //     const newRoute = await Route.create(route);
// //     const newSchedule = await Schedule.create({ ...schedule, busId: newBus.busId, routeId: newRoute.routeId });
// //     const newPrice = await Price.create({ ...price, scheduleId: newSchedule.scheduleId });

// //     res.status(201).json({ bus: newBus, route: newRoute, schedule: newSchedule, price: newPrice });
// //   } catch (err) {
// //     console.error("Error while creating bus:", err);
// //     res.status(500).json({ message: "Error while creating bus" });
// //   }
// // };

// // module.exports = { getAvailableBuses, createBus };

// const { Op } = require('sequelize');
// const { Bus, Route, Schedule, Price } = require('../db/busModel'); // Adjust the path if necessary

// const getAvailableBuses = async (req, res) => {
//   const { from, to, date } = req.query;

//   if (!from || !to || !date) {
//     return res.status(400).json({ message: "Missing required query parameters: from, to, date" });
//   }

//   try {
//     const dateObj = new Date(date);

//     const availableSchedules = await Schedule.findAll({
//       include: [
//         { model: Bus, where: { status: 'available' } },
//         { model: Route, where: { from, to } },
//         { model: Price }
//       ],
//       where: {
//         dates: {
//           [Op.contains]: [dateObj] // Sequelize operator to check if the array contains the date
//         }
//       }
//     });

//     if (availableSchedules.length > 0) {
//       res.status(200).json(availableSchedules);
//     } else {
//       res.status(404).json({ message: "No available buses found" });
//     }
//   } catch (err) {
//     console.error("Error while fetching available buses:", err);
//     res.status(500).json({ message: "Error while fetching available buses" });
//   }
// };

// const createBus = async (req, res) => {
//   const { bus, route, schedule, price } = req.body;
//   try {
//     const newBus = await Bus.create(bus);
//     const newRoute = await Route.create(route);
//     const newSchedule = await Schedule.create({ ...schedule, busId: newBus.busId, routeId: newRoute.routeId });
//     const newPrice = await Price.create({ ...price, scheduleId: newSchedule.scheduleId });

//     res.status(201).json({ bus: newBus, route: newRoute, schedule: newSchedule, price: newPrice });
//   } catch (err) {
//     console.error("Error while creating bus:", err);
//     res.status(500).json({ message: "Error while creating bus" });
//   }
// };

// module.exports = { getAvailableBuses, createBus };

//22-06-24
// const { Op } = require('sequelize');
// const { Bus, Route, Schedule, Price } = require('../db/busModel'); // Adjust the path if necessary

// // const getAvailableBuses = async (req, res) => {
// //   const { from, to, date } = req.query;

// //   if (!from || !to || !date) {
// //     return res.status(400).json({ message: "Missing required query parameters: from, to, date" });
// //   }

// //   try {
// //     const dateObj = new Date(date);

// //     const availableSchedules = await Schedule.findAll({
// //       include: [
// //         { model: Bus, where: { status: 'available' } },
// //         { model: Route, where: { from, to } },
// //         { model: Price }
// //       ],
// //       where: {
// //         dates: {
// //           [Op.contains]: [dateObj] // Sequelize operator to check if the array contains the date
// //         }
// //       }
// //     });

// //     if (availableSchedules.length > 0) {
// //       res.status(200).json(availableSchedules);
// //     } else {
// //       res.status(404).json({ message: "No available buses found" });
// //     }
// //   } catch (err) {
// //     console.error("Error while fetching available buses:", err);
// //     res.status(500).json({ message: "Error while fetching available buses" });
// //   }
// // };
// const getAvailableBuses = async (req, res) => {
//   const { from, to, date } = req.query;

//   if (!from || !to || !date) {
//     return res.status(400).json({ message: "Missing required query parameters: from, to, date" });
//   }

//   try {
//     const dateObj = new Date(date);

//     const availableSchedules = await Schedule.findAll({
//       where: {
//         dates: {
//           [Op.contains]: [dateObj] // Sequelize operator to check if the array contains the date
//         }
//       },
//       include: [
//         {
//           model: Bus,
//           where: { status: 'available' },
//           required: true // This ensures only schedules with available buses are included
//         },
//         {
//           model: Route,
//           where: { from, to },
//           required: true // This ensures only schedules with matching routes are included
//         },
//         {
//           model: Price // Optionally include Price if needed
//         }
//       ]
//     });

//     if (availableSchedules.length > 0) {
//       res.status(200).json(availableSchedules);
//     } else {
//       res.status(404).json({ message: "No available buses found" });
//     }
//   } catch (err) {
//     console.error("Error while fetching available buses:", err);
//     res.status(500).json({ message: "Error while fetching available buses" });
//   }
// };

// const createBus = async (req, res) => {
//   const { bus, route, schedule, price } = req.body;
//   try {
//     const newBus = await Bus.create(bus);
//     const newRoute = await Route.create(route);
//     const newSchedule = await Schedule.create({ ...schedule, busId: newBus.busId, routeId: newRoute.routeId });
//     const newPrice = await Price.create({ ...price, scheduleId: newSchedule.scheduleId });

//     res.status(201).json({ bus: newBus, route: newRoute, schedule: newSchedule, price: newPrice });
//   } catch (err) {
//     console.error("Error while creating bus:", err);
//     res.status(500).json({ message: "Error while creating bus" });
//   }
// };

// module.exports = { getAvailableBuses, createBus };

const { Op } = require('sequelize');
const { Bus, Route, Schedule, Price } = require('../db/busModel'); // Adjust the path if necessary

// Controller functions

// // Get available buses based on query parameters
// const getAvailableBuses = async (req, res) => {
//   const { from, to, date } = req.query;

//   if (!from || !to || !date) {
//     return res.status(400).json({ message: "Missing required query parameters: from, to, date" });
//   }

//   try {
//     const dateObj = new Date(date);

//     const availableSchedules = await Schedule.findAll({
//       include: [
//         { model: Bus, where: { status: 'available' } },
//         { model: Route, where: { from, to } },
//         { model: Price }
//       ],
//       where: {
//         dates: {
//           [Op.contains]: [dateObj] // Sequelize operator to check if the array contains the date
//         }
//       }
//     });

//     if (availableSchedules.length > 0) {
//       res.status(200).json(availableSchedules);
//     } else {
//       res.status(404).json({ message: "No available buses found" });
//     }
//   } catch (err) {
//     console.error("Error while fetching available buses:", err);
//     res.status(500).json({ message: "Error while fetching available buses" });
//   }
// };

const getAvailableBuses = async (req, res) => {
  const { from, to, dates } = req.query;
 
  try {
    let buses;
 
    // Fetch buses based on datesAvailable if provided
    if (dates) {
      buses = await Bus.findAll({
        include: [
          {
            model: Schedule,
            where: {
              datesAvailable: { [Op.contains]: [dates] }
            }
          },
          Route,
          Facility,
          Review
        ]
      });
    } else {
      // Fetch all buses
      buses = await Bus.findAll({
        include: [Route, Facility, Review, Schedule]
      });
    }
 
    // Further filter buses based on the availability of the route
    if (from && to) {
      buses = buses.filter(bus => bus.Route && isBusAvailable(from, to, bus.Route.busRoute));
    }
 
    res.status(200).json(buses);
  } catch (error) {
    console.error('Error fetching buses:', error);
    res.status(500).json({ error: 'Error fetching bus records' });
  }
};
 
const getAvailableBuses = async (req, res) => {
  const { from, to, date } = req.query;

  console.log('Query Parameters:', { from, to, date }); // Add this line

  if (!from || !to || !date) {
    return res.status(400).json({ message: "Missing required query parameters: from, to, date" });
  }

  try {
    const dateObj = new Date(date);

    const availableSchedules = await Schedule.findAll({
      include: [
        { model: Bus, where: { status: 'available' } },
        { model: Route, where: { from, to } },
        { model: Price }
      ],
      where: {
        dates: {
          [Op.contains]: [dateObj] // Sequelize operator to check if the array contains the date
        }
      }
    });

    if (availableSchedules.length > 0) {
      res.status(200).json(availableSchedules);
    } else {
      res.status(404).json({ message: "No available buses found" });
    }
  } catch (err) {
    console.error("Error while fetching available buses:", err);
    res.status(500).json({ message: "Error while fetching available buses" });
  }
};


// Create a new bus, route, schedule, and price
const createBus = async (req, res) => {
  const { bus, route, schedule, price } = req.body;

  try {
    const newBus = await Bus.create(bus);
    const newRoute = await Route.create(route);
    const newSchedule = await Schedule.create({ ...schedule, busId: newBus.busId, routeId: newRoute.routeId });
    const newPrice = await Price.create({ ...price, scheduleId: newSchedule.scheduleId });

    res.status(201).json({ bus: newBus, route: newRoute, schedule: newSchedule, price: newPrice });
  } catch (err) {
    console.error("Error while creating bus:", err);
    res.status(500).json({ message: "Error while creating bus" });
  }
};

module.exports = { getAvailableBuses, createBus };
