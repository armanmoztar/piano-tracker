const router = require('express').Router();
let PianoSession = require('../models/piano-session.model');

router.route('/').get((req, res) => {
  PianoSession.find()
    .then(pianoLog => res.json(pianoLog))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newPianoSession = new PianoSession({
    username,
    description,
    duration,
    date,
  });

  newPianoSession.save()
  .then(() => res.json('Piano Session logged!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;