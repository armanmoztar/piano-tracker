const router = require('express').Router();
let pianoSession = require('../models/piano-session.model.js');

router.route('/').get((req, res) => {
  pianoSession.find()
    .then(pianoLog => res.json(pianoLog))
    .catch(err => res.status(400).json('Error: ' + err));
});

// handles incoming HTTP POST requests on the /users/add/ URL path
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newPianoSession = new pianoSession({
    username,
    description,
    duration,
    date,
  });

// save the new user to the database
  newPianoSession.save()
  .then(() => res.json('Piano session logged!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// returns a piano log item given an id
router.route('/:id').get((req, res) => {
  pianoSession.findById(req.params.id)
    .then(pianoSession => res.json(pianoSession))
    .catch(err => res.status(400).json('Error: ' + err));
});

// deletes a piano log item given an id
router.route('/:id').delete((req, res) => {
  pianoSession.findByIdAndDelete(req.params.id)
    .then(() => res.json('Piano session deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// update existing piano log item in the database
router.route('/update/:id').post((req, res) => {
  pianoSession.findById(req.params.id)
    .then(pianoSession => {
      pianoSession.username = req.body.username;
      pianoSession.description = req.body.description;
      pianoSession.duration = Number(req.body.duration);
      pianoSession.date = Date.parse(req.body.date);

      pianoSession.save()
        .then(() => res.json('Piano session updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;