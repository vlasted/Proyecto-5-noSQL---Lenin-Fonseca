const express = require('express');
const Cinema = require('../models/Cinema');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cinemas = await Cinema.find().populate('movies');
    return res.status(200).json(cinemas);
  } catch (err) {
    return res.status(500).json({
      message: 'Error getting cinemas',
      error: err.message
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCinema = new Cinema(req.body);
    const createdCinema = await newCinema.save();
    return res.status(201).json(createdCinema);
  } catch (err) {
    return res.status(400).json({
      message: 'Error creating cinema',
      error: err.message
    });
  }
});

module.exports = router;