// import express from 'express';
// import { Register } from '../db/dbConection';
// import { v4 as uuidv4 } from 'uuid';
// import bcrypt from 'bcrypt';

// export const registerRoute = express.Router();

// registerRoute.get("/", (req, res) => {
//   res.send("register page");
// });

// registerRoute.post("/", async (req, res) => {
//   const data = req.body;
//   try {
//     const existingUser = await Register.findOne({
//       where: { email: data.email },
//       attributes: ['userName', 'email', 'password']
//     });

//     if (existingUser) {
//       res.status(409).send("user already registered");
//       return;
//     }

//     bcrypt.hash(data.password, 10, async (err, hash) => {
//       if (err) {
//         res.status(500).send("error in registering");
//         return;
//       }

//       const newUser = await Register.create({
//         ...data,
//         registerId: uuidv4(),
//         password: hash,
//       });

//       if (newUser) {
//         res.send("User register successfully");
//       }
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).send("error while user registration");
//   }
// });

// registerRoute.get('/:email', async (req, res) => {
//   const { email } = req.params;
//   try {
//     const user = await Register.findOne({
//       where: { email },
//       attributes: ['userName', 'email']
//     });

//     if (user) {
//       res.send(user);
//     } else {
//       res.status(404).send('User not found');
//     }
//   } catch (err) {
//     res.status(500).send('Error while getting user');
//   }
// });
// const express = require('express');
// const { Register } = require('../db/dbConection'); // Adjust the path if necessary
// const { v4: uuidv4 } = require('uuid');
// const bcrypt = require('bcrypt');

// const registerRoute = express.Router();

// registerRoute.get("/", (req, res) => {
//   res.send("register page");
// });

// registerRoute.post("/", async (req, res) => {
//   const data = req.body;
//   try {
//     const existingUser = await Register.findOne({
//       where: { email: data.email },
//       attributes: ['userName', 'email', 'password']
//     });

//     if (existingUser) {
//       res.status(409).send("user already registered");
//       return;
//     }

//     bcrypt.hash(data.password, 10, async (err, hash) => {
//       if (err) {
//         res.status(500).send("error in registering");
//         return;
//       }

//       const newUser = await Register.create({
//         ...data,
//         registerId: uuidv4(),
//         password: hash,
//       });

//       if (newUser) {
//         res.send("User registered successfully");
//       }
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).send("error while user registration");
//   }
// });

// registerRoute.get('/:email', async (req, res) => {
//   const { email } = req.params;
//   try {
//     const user = await Register.findOne({
//       where: { email },
//       attributes: ['userName', 'email']
//     });

//     if (user) {
//       res.send(user);
//     } else {
//       res.status(404).send('User not found');
//     }
//   } catch (err) {
//     res.status(500).send('Error while getting user');
//   }
// });

// module.exports = registerRoute;

const express = require('express');
const { Register } = require('../db/registerModel'); // Adjust the path if necessary
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const registerRoute = express.Router();

registerRoute.get("/", (req, res) => {
  res.send("register page");
});

registerRoute.post("/", async (req, res) => {
  const data = req.body;
  try {
    const existingUser = await Register.findOne({
      where: { email: data.email },
      attributes: ['userName', 'email', 'password', 'phoneNumber'],
    });

    if (existingUser) {
      return res.status(409).json({ message: "User already registered" });
    }

    const hash = await bcrypt.hash(data.password, 10);

    const newUser = await Register.create({
      ...data,
      registerId: uuidv4(),
      password: hash,
    });

    return res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    console.error("Error while user registration:", err);
    return res.status(500).json({ message: "Error while user registration" });
  }
});

registerRoute.get('/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await Register.findOne({
      where: { email },
      attributes: ['userName', 'email', 'phoneNumber'], // Include phoneNumber in the attributes
    });

    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    console.error("Error while getting user:", err);
    return res.status(500).json({ message: 'Error while getting user' });
  }
});

module.exports = registerRoute;
