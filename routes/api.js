/**
 * The default index route handler.
 * Responds to a request with body content to demonstrate the app is running as expected.
 */
/*module.exports = (req, res, next) => {
  res.end(`Express Code Challenge Started`);
}*/

// Dependencies
import express from 'express'; // To define a routing table.

// Importing the methods of each model
import { createUser } from '../models/user';
/*import { } from '../models/institution';
import { } from '../models/book'; */

// Route
const router = express.Router();

// View to see the API Endpoints
router.get('/', (req, res, next) => {
  res.send(`
    <p>API Endpoints</p>
    <p><a href="/api/users/signin">/users/signin</a></p>
    <p><a href="/api/users/create">/users/create</a></p>
    <p><a href="/api/books">/books</a></p>
  `);
});

// Using POST method to Create a new user.
router.post('/user', (req, res, next) => {
  const { userName, userEmail, userRol, userPassword } = req.body;

  // Calling createUser method that is in user model
  createUser({
    userName,
    userEmail,
    userRol,
    userPassword
  }, (data, error = false) => {
    if(error) {
      res.json({
        error: true,
        details: error
      });
    } else {
      res.json({
        response: {
          saved: true,
          user: data
        }
      });
    }
  });
});

export default router;
