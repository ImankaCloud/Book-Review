import { create } from "zustand";
import {
  fetchReviews,
  addReview,
  updateReview,
  deleteReview,
} from "../services/reviewService";
import { toast } from "react-hot-toast";

const useReviewStore = create((set, get) => ({
  reviews: [],
  loading: false,
  error: null,
  searchTerm: "",
  filterRating: 0,
  sortBy: "dateAdded",

  // Actions
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilterRating: (rating) => set({ filterRating: parseInt(rating) }),
  setSortBy: (sortBy) => set({ sortBy }),
  fetchAllReviews: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchReviews();
      set({ reviews: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
      toast.error(error.message);
    }
  },

  addNewReview: async (reviewData) => {
    set({ loading: true, error: null });
    try {
      const newReview = await addReview({
        ...reviewData,
        rating: parseInt(reviewData.rating),
      });

      set((state) => ({
        reviews: [...state.reviews, newReview],
        loading: false,
      }));

      toast.success("Review added successfully!");
      return true;
    } catch (error) {
      set({ error: error.message, loading: false });
      toast.error(error.message);
      return false;
    }
  },

  updateExistingReview: async (id, reviewData) => {
    set({ loading: true, error: null });
    try {
      const updatedReview = await updateReview(id, {
        ...reviewData,
        rating: parseInt(reviewData.rating),
      });

      set((state) => ({
        reviews: state.reviews.map((r) => (r._id === id ? updatedReview : r)),
        loading: false,
      }));

      toast.success("Review updated successfully!");
      return true;
    } catch (error) {
      set({ error: error.message, loading: false });
      toast.error(error.message);
      return false;
    }
  },

  deleteReview: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteReview(id);

      set((state) => ({
        reviews: state.reviews.filter((r) => r._id !== id),
        loading: false,
      }));

      toast.success("Review deleted successfully!");
      return true;
    } catch (error) {
      set({ error: error.message, loading: false });
      toast.error(error.message);
      return false;
    }
  },

  // Selectors
  getFilteredReviews: () => {
    const { reviews, searchTerm, filterRating, sortBy } = get();
    const searchLower = searchTerm.toLowerCase();

    return reviews
      .filter((review) => {
        const matchesSearch =
          review.title.toLowerCase().includes(searchLower) ||
          review.author.toLowerCase().includes(searchLower) ||
          review.reviewText.toLowerCase().includes(searchLower);

        const matchesRating =
          filterRating === 0 || review.rating >= filterRating;

        return matchesSearch && matchesRating;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "rating":
            return b.rating - a.rating;
          case "title":
            return a.title.localeCompare(b.title);
          case "dateAdded":
          default:
            return new Date(b.dateAdded) - new Date(a.dateAdded);
        }
      });
  },
}));

export default useReviewStore;
