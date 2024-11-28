import { useEffect } from "react";
import { motion } from "framer-motion";
import ReviewList from "../components/ReviewList";
import FilterControls from "../components/FilterControls";
import ReviewSkeleton from "../components/ReviewSkeleton";
import useReviewStore from "../store/reviewStore";
import { FaBook } from "react-icons/fa";

const Home = () => {
  const {
    loading,
    searchTerm,
    filterRating,
    sortBy,
    setSearchTerm,
    setFilterRating,
    setSortBy,
    getFilteredReviews,
    deleteReview,
    fetchAllReviews,
  } = useReviewStore();

  useEffect(() => {
    fetchAllReviews();
  }, [fetchAllReviews]);

  const filteredReviews = getFilteredReviews();

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
            <h1 className="text-4xl font-bold text-blue-900">Book Reviews</h1>
          </div>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Discover great books through community reviews. Share your thoughts
            and help others find their next read.
          </p>
        </motion.div>

        <FilterControls
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterRating={filterRating}
          onFilterRatingChange={setFilterRating}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <ReviewSkeleton key={index} />
            ))}
          </div>
        ) : filteredReviews.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white rounded-lg shadow-sm border border-blue-100"
          >
            <FaBook className="mx-auto text-blue-300 mb-4 text-4xl" />
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              No Reviews Found
            </h2>
            <p className="text-blue-700">
              {searchTerm || filterRating > 0
                ? "Try adjusting your filters to see more reviews."
                : "Be the first to add a review!"}
            </p>
          </motion.div>
        ) : (
          <ReviewList reviews={filteredReviews} onDelete={deleteReview} />
        )}
      </div>
    </div>
  );
};

export default Home;
