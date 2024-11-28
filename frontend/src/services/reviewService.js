import axios from "axios";

const API_URL = "http://localhost:5000/reviews";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  if (config.method === "post") {
    config.data = {
      ...config.data,
      dateAdded: new Date().toISOString(),
    };
  }
  return config;
});

// Fetch all reviews
export const fetchReviews = async () => {
  try {
    const response = await api.get("");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch reviews");
  }
};

// Add a new review
export const addReview = async (review) => {
  try {
    const response = await api.post("", review);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to add review");
  }
};

// Update a review
export const updateReview = async (id, review) => {
  try {
    const response = await api.put(`/${id}`, review);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to update review");
  }
};

// Delete a review
export const deleteReview = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete review");
  }
};
