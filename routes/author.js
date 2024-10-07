import { Router } from "express";
import { addAuthor, getAllAuthors, getOneAuthor, updateAuthor, deleteAuthor } from "../controllers/author.js";

const authorRouter = Router();

authorRouter.post('/authors', addAuthor);

authorRouter.get('/authors', getAllAuthors);

authorRouter.get('/authors', getOneAuthor);

authorRouter.patch('/authors', updateAuthor);

authorRouter.delete('/authors', deleteAuthor);



export default authorRouter;