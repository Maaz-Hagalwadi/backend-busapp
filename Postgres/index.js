
const express = require('express');
const cors = require('cors');
const registerRoute = require('./routes/register'); // Ensure the path is correct
const loginRoute = require('./routes/login'); // Ensure the path is correct
const forgotPasswordRoute = require('./routes/forgotPassword'); // Ensure the path is correct
const resetPasswordRoute = require('./routes/resetPass'); // Ensure the path is correct
const bus = require('./routes/busRoutes');
const booking=require('./routes/bookingroute')


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/register', registerRoute);
app.use('/login', loginRoute); // Add the login route
app.use('/resetPassword', resetPasswordRoute); // Corrected the variable name
app.use('/forgotPassword', forgotPasswordRoute); // Corrected the variable name
app.use('/bus',bus);
app.use('/booking',booking);

app.get('/', (req, res) => {
  res.send('URL application');
});

app.listen(port, () => {
  console.log('Server is running on:', port);
});
