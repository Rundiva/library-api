import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getOneBook, updateBook } from "../controllers/book.js";

// create a router
const bookRouter = Router();

// Define routes
bookRouter.post('/books', addBook);

bookRouter.get('/books', getAllBooks);

bookRouter.get('/books/:id', getOneBook);

bookRouter.patch('/books/:id', updateBook);

bookRouter.delete('/books/:id', deleteBook);

// Export router
export default bookRouter;