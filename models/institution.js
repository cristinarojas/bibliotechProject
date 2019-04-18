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

// Institution model
const InstitutionModel = db.define('institution', {
  institutionId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  institutionName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The institution name is empty.'
      }
    }
  },
  institutionUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The institution Url is empty.'
      }
    }
  },
  institutionEmailDomain: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The institution email domain is empty.'
      }
    }
  }
});
