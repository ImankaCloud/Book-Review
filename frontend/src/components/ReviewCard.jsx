import { Link } from "react-router-dom";
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

const ReviewCard = ({ review, onDelete }) => {
  const ratingStars = Array(5)
    .fill(0)
    .map((_, index) => (
      <FaStar
        key={index}
        className={`${
          index < review.rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">
          {review.title}
        </h2>
        <p className="text-blue-700 mb-3">by {review.author}</p>

        <div className="flex items-center mb-4">
          <div className="flex space-x-1">{ratingStars}</div>
          <span className="ml-2 text-sm text-gray-600">
            ({review.rating}/5)
          </span>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-3">{review.reviewText}</p>

        <div className="text-sm text-gray-500 mb-4">
          Added on: {new Date(review.dateAdded).toLocaleDateString()}
        </div>

        <div className="flex justify-end space-x-3">
          <Link
            to={`/edit/${review._id}`}
            className="flex items-center px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
          >
            <FaEdit className="mr-1" />
            Edit
          </Link>
          <button
            onClick={() => onDelete(review._id)}
            className="flex items-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
          >
            <FaTrash className="mr-1" />
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
