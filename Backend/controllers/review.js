// Creating a function js files that contains all function for review router.
const Review = require('../models/review');
const Trip = require('../models/trip');
const User = require('../models/user');


async function addReview (req, res){
    const { tripId } = req.params;
    const { userId, rating, comment } = req.body;
  
    try {
  
      const trip = await Trip.findById(tripId);
      if (!trip) {
        return res.status(404).json({ message: 'Trip not found' });
      }
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Create a new review
      const review = new Review({
        trip: tripId,
        user: userId,  // Store the user's ID in the review
        rating,
        comment,
      });
  
      await review.save();
      res.status(201).json({ message: 'Review created successfully', review });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  module.exports = { addReview }