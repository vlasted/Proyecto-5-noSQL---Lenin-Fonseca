const express = require('express');
const Movie = require('../models/Movie');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/id/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);

    if (movie) {
      return res.status(200).json(movie);
    } else {
      return res.status(404).json('No movie found by this id');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/title/:title', async (req, res) => {
  const { title } = req.params;

  try {
    const movieByTitle = await Movie.find({ title });
    return res.status(200).json(movieByTitle);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/genre/:genre', async (req, res) => {
  const { genre } = req.params;

  try {
    const movieByGenre = await Movie.find({ genre });
    return res.status(200).json(movieByGenre);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/year/:year', async (req, res) => {
  const { year } = req.params;

  try {
    const movieByYear = await Movie.find({ year: { $gt: year } });
    return res.status(200).json(movieByYear);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (err) {
    return res.status(400).json({
      message: 'Error creating movie',
      error: err.message
    });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedMovie) {
      return res.status(404).json({
        message: 'No movie found by this id'
      });
    }

    return res.status(200).json(updatedMovie);
  } catch (err) {
    return res.status(400).json({
      message: 'Error updating movie',
      error: err.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      return res.status(404).json({
        message: 'No movie found by this id'
      });
    }

    return res.status(200).json({
      message: 'Movie deleted successfully',
      deletedMovie
    });
  } catch (err) {
    return res.status(400).json({
      message: 'Error deleting movie',
      error: err.message
    });
  }
});

module.exports = router;