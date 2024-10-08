import { Router } from "express";
import { addAuthor, getAllAuthors, getOneAuthor, updateAuthor, deleteAuthor } from "../controllers/author.js";

const authorRouter = Router();

authorRouter.post('/authors', addAuthor);

authorRouter.get('/authors', getAllAuthors);

authorRouter.get('/authors/:id', getOneAuthor);

authorRouter.patch('/authors/:id', updateAuthor);

authorRouter.delete('/authors/:id', deleteAuthor);



export default authorRouter;