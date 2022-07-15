const router = require('express').Router();
let User = require('../models/user.model.js');

// handles incoming HTTP GET requests on the /users/ URL path
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// handles incoming HTTP POST requests on the /users/add/ URL path
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const newUser = new User({username});

  // save the new user to the database
  newUser.save()
    .then(() => res.json('User has been added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;