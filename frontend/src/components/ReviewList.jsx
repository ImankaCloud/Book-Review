import ReviewCard from "./ReviewCard";
import { motion } from "framer-motion";

const ReviewList = ({ reviews, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {reviews.map((review, index) => (
        <motion.div
          key={review._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.1 },
          }}
        >
          <ReviewCard review={review} onDelete={onDelete} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ReviewList;
