// This object have all the database configuration.
export default {
  db: {
    dialect: 'mysql',
    host: 'localhost',
    database: 'bibliotech',
    user: 'root',
    password: '12345678'
  }
};

/*
mysql commands

CREATE TABLE users (
	userId INT DEFAULT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  password VARCHAR(40) NOT NULL,
  PRIMARY KEY (userId)
) ENGINE=INNODB;

CREATE TABLE institutions (
	institutionId INT DEFAULT NULL AUTO_INCREMENT,
  institution VARCHAR(100) NOT NULL,
	url VARCHAR(100) NOT NULL,
	domain VARCHAR(50) NOT NULL,
  PRIMARY KEY (institutionId)
) ENGINE=INNODB;

CREATE TABLE books (
  bookId INT DEFAULT NULL AUTO_INCREMENT,
  isbn VARCHAR(100) NOT NULL,
	title VARCHAR(100) NOT NULL,
	author VARCHAR(100) NOT NULL,
  PRIMARY KEY (bookId)
) ENGINE=INNODB;

CREATE TABLE re_users_2_institutions (
  userId INT NOT NULL,
  institutionId INT NOT NULL,
  PRIMARY KEY (userId, institutionId)
  FOREIGN KEY userId REFERENCES users (userId) ON DELETE CASCADE,
  FOREIGN KEY institutionId  REFERENCES institutions (institutionId) ON DELETE CASCADE
)

CREATE TABLE re_books_2_institutions (
  bookId INT NOT NULL,
  institutionId INT NOT NULL,
  PRIMARY KEY (bookId, institutionId)
  FOREIGN KEY bookId REFERENCES books (bookId) ON DELETE CASCADE,
  FOREIGN KEY institutionId  REFERENCES institutions (institutionId) ON DELETE CASCADE
)
*/
