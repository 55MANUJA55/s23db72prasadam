const mongoose = require('mongoose');

const BadmintonSchema = mongoose.Schema({
  Player_Name: {
    type: String,
    required: [true, "Name required"]
  },
  Player_Age: Number,
  No_Of_Matches_Played: {
    type: Number,
    min: [5, "Min value is 5"],
    max: [50, "Max value is 50"]
  },
});

module.exports = mongoose.model('Badminton', BadmintonSchema);
