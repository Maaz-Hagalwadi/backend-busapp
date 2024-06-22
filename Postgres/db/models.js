const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');

// Load the environment variables from the .env file
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

// Initialize Sequelize with PostgreSQL connection
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT,
  
});

// Define the Login model
const Login = sequelize.define('Login', {
  loginId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'logins',
  timestamps: false
});

// Define the Register model
const Register = sequelize.define('Register', {
  registerId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'registers',
  timestamps: false
});

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Failed to sync database:', err));

// Export the models and the Sequelize instance
module.exports = {
  sequelize,
  Login,
  Register
};
