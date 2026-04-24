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

router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedCinema = await Cinema.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedCinema) {
      return res.status(404).json({
        message: 'No cinema found by this id'
      });
    }

    return res.status(200).json(updatedCinema);
  } catch (err) {
    return res.status(400).json({
      message: 'Error updating cinema',
      error: err.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCinema = await Cinema.findByIdAndDelete(id);

    if (!deletedCinema) {
      return res.status(404).json({
        message: 'No cinema found by this id'
      });
    }

    return res.status(200).json({
      message: 'Cinema deleted successfully',
      deletedCinema
    });
  } catch (err) {
    return res.status(400).json({
      message: 'Error deleting cinema',
      error: err.message
    });
  }
});

module.exports = router;