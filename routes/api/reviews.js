const express = require('express');
const router = express.Router();

// Review Model
const Review = require('../../models/Review');

/**
 * @route   GET api/reviews
 * @desc    Get all the reviews
 * @access  Public
 */
router.get('/', (req, res) => {
  Review.find()
    .sort({ score: -1 })
    .then(reviews => res.json(reviews));
});

/**
 * @route   POST api/reviews
 * @desc    Create a review
 * @access  Public
 */
router.post('/', (req, res) => {
  const newReview = new Review({
    venue: req.body.venue,
    score: req.body.score
  });

  newReview.save().then(review => res.json(review));
});

module.exports = router;
