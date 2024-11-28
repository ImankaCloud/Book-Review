import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import {
  addReview,
  updateReview,
  fetchReviews,
} from "../services/reviewService";
import ReviewForm from "../components/ReviewForm";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const AddEditReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(!!id);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    rating: "",
    reviewText: "",
  });

  useEffect(() => {
    if (id) {
      fetchReviews()
        .then((reviews) => {
          const review = reviews.find((r) => r._id === id);
          if (review) {
            setFormData(review);
          } else {
            toast.error("Review not found");
            navigate("/");
          }
        })
        .catch(() => toast.error("Failed to fetch review"))
        .finally(() => setLoading(false));
    }
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = id ? updateReview(id, formData) : addReview(formData);
    action
      .then(() => {
        toast.success(id ? "Review updated!" : "Review added!");
        navigate("/");
      })
      .catch(() => toast.error("Something went wrong."));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <FaBook className="text-blue-600 mr-2 text-3xl" />
            <h1 className="text-4xl font-bold text-blue-900">
              {id ? "Edit Review" : "Add New Review"}
            </h1>
          </div>
          <p className="text-blue-700 max-w-2xl mx-auto">
            {id
              ? "Update your review and help others discover great books."
              : "Share your thoughts and help others discover their next favorite book."}
          </p>
        </motion.div>

        <ReviewForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddEditReview;
