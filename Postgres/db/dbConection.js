// const { Pool } = require("pg");
// const dotenv = require("dotenv");

// dotenv.config();

// const dbConfig = {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   ssl: {
//     rejectUnauthorized: process.env.DB_SSL === 'true'
//   }
// };

// const pool = new Pool(dbConfig);

// module.exports = pool;
// const { Pool } = require("pg");
// const dotenv = require("dotenv");

// dotenv.config();

// const dbConfig = {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   ssl: {
//     rejectUnauthorized: process.env.DB_SSL === 'true'
//   }
// };

// const pool = new Pool(dbConfig);

// module.exports = pool;
// const { Pool } = require("pg");
// const dotenv = require("dotenv");
// const path = require("path");

// // Specify the path to your .env file
// const envPath = path.resolve(__dirname, '../.env');

// // Load the environment variables from the specified path
// dotenv.config({ path: envPath });

// const dbConfig = {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
//   ssl: {
//     rejectUnauthorized: process.env.DB_SSL === 'true'
//   }
// };

// const pool = new Pool(dbConfig);

// module.exports = pool;

// const { Sequelize, DataTypes } = require('sequelize');
// const dotenv = require('dotenv');

// dotenv.config();

// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: process.env.DB_SSL === 'true',
//       rejectUnauthorized: false
//     }
//   }
// });

// const Register = sequelize.define('Register', {
//   registerId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phoneNumber: {
//     type: DataTypes.STRING,
//     allowNull: true, // Set to true if phone number is optional, otherwise set to false
//   },
// });

// sequelize.sync()
//   .then(() => console.log('Database synced'))
//   .catch(err => console.error('Failed to sync database:', err));

// module.exports = { sequelize, Register };

// const { Sequelize, DataTypes } = require('sequelize');
// const dotenv = require('dotenv');

// dotenv.config();

// const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
//   host: process.env.DATABASE_HOST,
//   port: process.env.DATABASE_PORT,
//   dialect: 'postgres',
  
// });

// const Register = sequelize.define('Register', {
//   registerId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phoneNumber: {
//     type: DataTypes.STRING,
//     allowNull: true, // Set to false if phone number is required
//   },
// });

// const Login = sequelize.define('Login', {
//   loginId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// sequelize.sync()
//   .then(() => console.log('Database synced'))
//   .catch(err => console.error('Failed to sync database:', err));

// module.exports = { sequelize, Register, Login };

const { Sequelize } = require('sequelize');
require('dotenv').config();
 
console.log('DATABASE_NAME:', process.env.DATABASE_NAME);
console.log('DATABASE_USER:', process.env.DATABASE_USER);
console.log('DATABASE_PASSWORD:', process.env.DATABASE_PASSWORD);
console.log('DATABASE_HOST:', process.env.DATABASE_HOST);
console.log('DATABASE_PORT:', process.env.DATABASE_PORT);
 
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
  }
);
module.exports = { sequelize };