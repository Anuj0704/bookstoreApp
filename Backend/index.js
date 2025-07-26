import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

app.use(cors({
  origin: [
    "http://localhost:5173",                         
    "https://bookstoreapp-frontend-4zgi.onrender.com"       
  ],
  credentials: true
}));
app.use(express.json());


//connect to mongoDB 
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB Atlas");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error("❌ MongoDB connection error:", error.message);
});
  

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
/*app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});*/

