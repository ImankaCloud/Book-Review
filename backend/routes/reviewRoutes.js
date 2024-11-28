import express from "express";
import {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";

const router = express.Router();

router.get("/", getAllReviews); // GET /reviews
router.post("/", createReview); // POST /reviews
router.put("/:id", updateReview); // PUT /reviews/:id
router.delete("/:id", deleteReview); // DELETE /reviews/:id

export default router;
