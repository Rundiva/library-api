import express from "express";
import cors from "cors";
import Joi from "joi";
import mongoose from "mongoose";
import bookRouter from "./routes/book.js";
import userRouter from "./routes/user.js";
import reviewRouter from "./routes/review.js";
import authorRouter from "./routes/author.js";


// Create an express app
const app = express();


// use middleware
app.use(express.json());
app.use(cors());

// connect to database
await mongoose.connect(process.env.MONGO_URI);


// declare routes
app.use(bookRouter);
app.use(userRouter);
app.use(authorRouter);
app.use(reviewRouter);


// Listen for incoming reqeusts
app.listen(5000, () => {
    console.log('App is listening on port 5000');
});