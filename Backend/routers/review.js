const express = require('express');
const router = express.Router();
const ensureAdmin = require('../middlewares/ensureAdmin');
const {addReview
} = require('../controllers/reviews');

// 1. Create a Review - add review given by user for particular trip in database
router.post('/:tripId', addReview);
