import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // Make sure this line is present
import userRoute from "./routes/userRoute.js";
import attendanceRoute from "./routes/attendanceRoute.js";

dotenv.config();

const app = express();

// Enable CORS for frontend connection
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/user", userRoute);
app.use("/api/attendance", attendanceRoute);

// Add a test route to verify connection
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend connected successfully!" });
});
