const express = require("express");
const router = express.Router();

const Movie = require("../Models/MovieSchema");

const errorHandler = require("../Middlewares/errorMiddleware");

function createResponse(ok, message, data) {
  return {
    ok,
    message,
    data,
  };
}

router.get("/test", async (req, res) => {
  res.json({
    message: "Movie api is working",
  });
});

router.post("/createmovie", async (req, res, next) => {
  try {
    const {
      title,
      description,
      portraitImgUrl,
      landscapeImgUrl,
      rating,
      genre,
      duration,
    } = req.body;

    const newMovie = new Movie({
      title,
      description,
      portraitImgUrl,
      landscapeImgUrl,
      rating,
      genre,
      duration,
    });
    await newMovie.save();
    res.status(201).json({
      ok: true,
      message: "Movie added successfully",
    });
  } catch (err) {
    next(err); // Pass any errors to the error handling middleware
  }
});

router.get("/movies", async (req, res, next) => {
  try {
    const movies = await Movie.find();

    // Return the list of movies as JSON response
    res.status(200).json({
      ok: true,
      data: movies,
      message: "Movies retrieved successfully",
    });
  } catch (err) {
    next(err); // Pass any errors to the error handling middleware
  }
});
router.get("/movies/:id", async (req, res, next) => {
  try {
    const movieId = req.params.id;
    const movie = await Movie.findById(movieId);
    if (!movie) {
      // If the movie is not found, return a 404 Not Found response
      return res.status(404).json({
        ok: false,
        message: "Movie not found",
      });
    }

    res.status(200).json({
      ok: true,
      data: movie,
      message: "Movie retrieved successfully",
    });
  } catch (err) {
    next(err); // Pass any errors to the error handling middleware
  }
});
router.put("/updatemovie/:id", async (req, res, next) => {
  try {
    const movieId = req.params.id;
    Movie.findByIdAndUpdate(
      { _id: movieId },
      {
        title: req.body.title,
        desc: req.body.desc,
        rating: req.body.rating,
      }
    );

    res.status(200).json({
      ok: true,
      message: "Movie updated successfully",
    });
  } catch (err) {
    next(err); // Pass any errors to the error handling middleware
  }
});
router.delete("/deletemovie/:id", async (req, res, next) => {
  const movieId = req.params.id;
  Movie.findByIdAndDelete({ _id: movieId })
    .then((r) => res.json(r))
    .catch((err) => err.json(err));
});

router.use(errorHandler);

module.exports = router;
