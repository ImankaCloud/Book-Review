import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const ReviewForm = ({
  formData,
  setFormData,
  onSubmit,
  submitLabel = "Submit",
}) => {
  const handleRatingClick = (rating) => {
    setFormData({ ...formData, rating: rating });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-blue-100 p-6"
    >
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Book Title Input */}
        <div>
          <label className="block text-sm font-medium text-blue-900 mb-2">
            Book Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Enter the book title"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-900 mb-2">
            Author
          </label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            placeholder="Enter the author name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-900 mb-2">
            Rating
          </label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() => handleRatingClick(rating)}
                className="focus:outline-none"
              >
                <FaStar
                  className={`text-2xl ${
                    rating <= formData.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  } hover:text-yellow-400 transition-colors`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-900 mb-2">
            Your Review
          </label>
          <textarea
            value={formData.reviewText}
            onChange={(e) =>
              setFormData({ ...formData, reviewText: e.target.value })
            }
            placeholder="Write your review..."
            rows="6"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-300"
        >
          {submitLabel}
        </button>
      </form>
    </motion.div>
  );
};

export default ReviewForm;
