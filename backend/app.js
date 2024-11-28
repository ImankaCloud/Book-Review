import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import reviewRoutes from "./routes/reviewRoutes.js";
dotenv.config();

// Initialize app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to database
connectDB();

// Routes
app.use("/reviews", reviewRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
