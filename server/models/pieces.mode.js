const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const piecesSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Piece = mongoose.model('Piece', piecesSchema);

module.exports = Piece;