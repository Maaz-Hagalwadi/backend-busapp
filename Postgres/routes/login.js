const express = require('express');
const {  Login } = require('../db/loginModel'); // Adjust the path if necessary 
const {  Register } = require('../db/registerModel'); 
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const loginRoute = express.Router();

loginRoute.get("/", (req, res) => {
  res.send("login page");
});

loginRoute.post("/", async (req, res) => {
  const data = req.body;
  try {
    const checkUser = await Register.findOne({
      where: { email: data.email },
      attributes: ['userName', 'password', 'email']
    });

    if (checkUser) {
      bcrypt.compare(data.password, checkUser.password, async (err, result) => {
        if (!result) {
          res.status(401).send("Invalid Data");
        } else {
          const newUser = await Login.create({
            ...data,
            loginId: uuidv4(),
          });

          if (newUser) {
            res.send("User logged in successfully");
          }
        }
      });
    } else {
      res.status(403).send('Not yet registered');
    }
  } catch (err) {
    console.error(err);
    res.status(401).send("Error while user login");
  }
});

module.exports = loginRoute;
