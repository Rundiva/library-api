import { Router } from "express";
import { addBook, getAllBooks, getOneBook, updateBook, deleteBook } from "../controllers/book.js";
import { remoteUpload } from "../middlewares/upload.js";
// create a router
const bookRouter = Router();

// Define routes
bookRouter.post('/books', remoteUpload.single("cover"), addBook);

bookRouter.get('/books', getAllBooks);

bookRouter.get('/books/:id', getOneBook);

bookRouter.patch('/books/:id', updateBook);

bookRouter.delete('/books/:id', deleteBook);

// Export router
export default bookRouter;