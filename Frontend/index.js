import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//  Connect to MongoDB using async/await
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to MongoDB");
  } catch (error) {
    console.error(" MongoDB connection error:", error.message);
    process.exit(1); 
  }
};

// call function
connectDB();

// home route
app.get("/", (req, res) => {
  res.send("Hello Home");
});

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// start server
app.listen(PORT, () => {
  console.log(` Server is listening on port ${PORT}`);
});
