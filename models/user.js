// Dependencies
import Sequelize from 'sequelize'; // ORM - support different dialects like: PostgreSQL, MySQL, SQLite and MSSQL

// Database configuration
import dbConfig from '../config/index';

// Instance of sequelize object (to define model, to do a query, to sync the table)
const db = new Sequelize(dbConfig.db.database, dbConfig.db.user, dbConfig.db.password, {
  host: dbConfig.db.host,
  dialect: dbConfig.db.dialect,
  operatorsAlianses: true
});

// Removing extra response
const queryType = {
  type: Sequelize.QueryTypes.SELECT
};

// User model
const UserModel = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The user name is empty.'
      }
    }
  },
  userEmail: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The user email is empty.'
      }
    }
  },
  userRol: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The user rol is empty.'
      }
    }
  },
  userPassword: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The user password is empty.'
      }
    }
  }
});

// Create user method
export function createUser(userData, callback) {
  // ES6 destructuring to obtaing all the properties of the object
  const {
    userName,
    userEmail,
    userRol,
    userPassword
  } = userData;

  const data = {
    userName,
    userEmail,
    userRol,
    userPassword
  };

  // Using the User model for create user
  db
    .sync()
    .then(() => {
      UserModel.create(data).then((insertedUser) => {
        console.log(insertedUser);
        callback(insertedUser.dataValues);
      }).catch((error) => {
        console.log(error);
        callback(false, error);
      });
    });
}
