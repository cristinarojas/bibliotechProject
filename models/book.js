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
const BookModel = db.define('book', {
  bookId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  bookIsbn: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The book ISBN is empty.'
      }
    }
  },
  bookTitle: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The book title is empty.'
      }
    }
  },
  bookAuthor: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The book author is empty.'
      }
    }
  }
});
