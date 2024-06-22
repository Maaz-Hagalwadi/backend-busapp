// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./dbConection'); // Adjust the path if necessary

// const Bus = sequelize.define('Bus', {
//   busId: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   busNumber: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   capacity: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   from: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   to: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   dates: {
//     type: DataTypes.ARRAY(DataTypes.DATE),
//     allowNull: false,
//   },
//   departureTime: {
//     type: DataTypes.TIME,
//     allowNull: false,
//   },
//   arrivalTime: {
//     type: DataTypes.TIME,
//     allowNull: false,
//   },
//   price: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   status: {
//     type: DataTypes.ENUM('available', 'unavailable', 'maintenance'),
//     defaultValue: 'available',
//   }
// });

// sequelize.sync()
//   .then(() => console.log('Bus table has been synced'))
//   .catch(err => console.error('Failed to sync Bus table:', err));

// module.exports = { Bus };


const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConection'); // Adjust the path if necessary

// Bus Model
const Bus = sequelize.define('Bus', {
  busId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  busNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('available', 'unavailable', 'maintenance'),
    defaultValue: 'available',
  }
});

// Route Model
const Route = sequelize.define('Route', {
  routeId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  from: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  to: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Schedule Model
const Schedule = sequelize.define('Schedule', {
  scheduleId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  busId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Bus,
      key: 'busId',
    }
  },
  routeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Route,
      key: 'routeId',
    }
  },
  dates:{
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
    defaultValue: []
  },
  departureTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  arrivalTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

// Price Model
const Price = sequelize.define('Price', {
  priceId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  scheduleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Schedule,
      key: 'scheduleId',
    }
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Establishing relationships
Bus.hasMany(Schedule, { foreignKey: 'busId' });
Route.hasMany(Schedule, { foreignKey: 'routeId' });
Schedule.belongsTo(Bus, { foreignKey: 'busId' });
Schedule.belongsTo(Route, { foreignKey: 'routeId' });
Schedule.hasMany(Price, { foreignKey: 'scheduleId' });
Price.belongsTo(Schedule, { foreignKey: 'scheduleId' });

sequelize.sync()
  .then(() => console.log('Tables have been synced'))
  .catch(err => console.error('Failed to sync tables:', err));

module.exports = { Bus, Route, Schedule, Price };
