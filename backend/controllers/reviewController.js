import Review from "../models/review.js";

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch reviews", error: err.message });
  }
};

export const createReview = async (req, res) => {
  const { title, author, rating, reviewText } = req.body;
  try {
    const newReview = new Review({ title, author, rating, reviewText });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to create review", error: err.message });
  }
};

export const updateReview = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedReview = await Review.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json(updatedReview);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to update review", error: err.message });
  }
};

export const deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete review", error: err.message });
  }
};
