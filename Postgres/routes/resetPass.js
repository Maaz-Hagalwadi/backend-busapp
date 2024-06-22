const express = require('express');
const { Register } = require('../db/dbConection'); // Ensure the correct path
const { userEmail } = require('./forgotPassword'); // Ensure the correct path
const bcrypt = require('bcrypt');

const resetPasswordRoute = express.Router();

resetPasswordRoute.get("/", (req, res) => {
  console.log(userEmail);
  res.send(userEmail[0]);
});

resetPasswordRoute.post("/", async (req, res) => {
  const newPassword = req.body.password;

  if (!userEmail[0]) {
    return res.status(400).send("No user email found. Please request password reset again.");
  }

  try {
    const user = await Register.findOne({
      where: { email: userEmail[0] },
      attributes: ['email', 'userName', 'registerId']
    });

    if (!user) {
      return res.status(404).send("User not found.");
    }

    bcrypt.hash(newPassword, 10, async (err, hash) => {
      if (err) {
        return res.status(500).send("Error while updating password");
      }

      user.password = hash;
      await user.save();

      res.send("Password updated successfully.");
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error occurred while updating password.");
  }
});

module.exports = resetPasswordRoute;
