const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  portraitImgUrl: {
    type: String,
    required: true,
  },
  landscapeImgUrl: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
