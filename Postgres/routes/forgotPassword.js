const express = require('express');
const { Register } = require('../db/dbConection'); // Ensure the correct path
const { mailOptions, transporter } = require('./mail'); // Ensure the correct path
const jwt = require('jsonwebtoken');

const forgotRouter = express.Router();

forgotRouter.get("/", (req, res) => {
  res.send("Forgot password");
});

let userEmail = [];
forgotRouter.post("/", async (req, res) => {
  const payload = req.body.email;
  userEmail = [];
  userEmail.push(payload);

  try {
    const checkUser = await Register.findOne({
      where: { email: payload }
    });

    if (checkUser) {
      const verifyToken = jwt.sign({ email: payload }, process.env.JWT_SECRET, { expiresIn: '5m' });
      const link = `${process.env.FE_URL}/resetPassword?verify=${verifyToken}`;

      await transporter.sendMail({
        ...mailOptions,
        to: payload,
        text: `Hi, please confirm your email and click the link to verify you: ${link}`
      });

      res.send("Valid user. Email sent.");
    } else {
      res.status(401).send("Invalid user.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error while checking user.");
  }
});

module.exports = forgotRouter;
