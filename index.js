import express from "express"
import mongoose from "mongoose";
import "dotenv/config";
import bookRouter from "./routes/book.js";
import userRouter from "./routes/user.js";


// Create an express app
const app = express();

await mongoose.connect(process.env.MONGO_URI)

// declare routes
app.use(bookRouter);
app.use(userRouter);

// define a route
app.get('/book', (req, res, next) => {
    console.log(req.headers);
    res.json("book");
})

// Listen for incoming reqeusts
app.listen(5000, () => {
    console. log('App is listening on port 5000');
});