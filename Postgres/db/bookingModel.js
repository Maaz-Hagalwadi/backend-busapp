const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConection'); // Adjust the path if necessary
const { Bus, Route, Schedule, Price } = require('./busModel'); // Adjust the path if necessary

// Booking Model
const Booking = sequelize.define('Booking', {
  bookingId: {
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
  scheduleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Schedule,
      key: 'scheduleId',
    }
  },
  bookingDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
});

// Passenger Model
const Passenger = sequelize.define('Passenger', {
  passengerId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  bookingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Booking,
      key: 'bookingId',
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('male', 'female', 'other'),
    allowNull: false,
  },
  seatNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

// Establishing relationships
Booking.hasMany(Passenger, { foreignKey: 'bookingId' });
Passenger.belongsTo(Booking, { foreignKey: 'bookingId' });

sequelize.sync()
  .then(() => console.log('Tables have been synced'))
  .catch(err => console.error('Failed to sync tables:', err));

module.exports = { Booking, Passenger };
