import { BookModel } from "../model/book.js";


export const addBook = async (req, res, next) => {
    try {
        console.log("Request body-->",await  req)
        const books = await BookModel.create(req.body);
        res.status(200).json(books);
    } catch (error) {
        next (error);
        
    }
}

export const getAllBooks = async(req, res, next) => {
    try {

        await BookModel.find(req.body);
        res.json ('Pick a Book!');
    } catch (error) {
        next(error)
        
    }
}

export const getOneBook = async(req, res, next) => {
    try {
        await BookModel.find();
        res.json ('View Book!');
    } catch (error) {
        
    }
}


export const updateBook =(req, res, next) => {
    res.json ('Book updated Successfully!');
}

export const deleteBook =(req, res, next) => {
    res.json ('Book deleted Successfully!');
}

