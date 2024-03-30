
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    portraitImgUrl: {
        type: String,
        required: true
    },
    landscapeImgUrl: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    genre: {
        type: [String], // You can store multiple genres as an array of strings
        required: true
    },
    duration: {
        type: String, // Duration in minutes
        required: true
    },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
