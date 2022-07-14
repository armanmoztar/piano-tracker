const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pianoSessionSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const pianoSessionModel = mongoose.model('pianoLog', pianoSessionSchema);

module.exports = pianoSessionModel;