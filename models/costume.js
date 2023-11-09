const mongoose = require('mongoose');

const costumeSchema = mongoose.Schema({
  costume_type: String,
  costume_size: String,
  costume_cost: Number,
});

module.exports = mongoose.model('Costume', costumeSchema);
