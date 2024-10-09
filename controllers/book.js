import { BookModel } from "../model/book.js";


export const addBook = async (req, res, next) => {
    try {
        // console.log("Request body-->",await  req)
       const showbook= await BookModel.create(req.body);
        res.status(201).json(showbook);
    } catch (error) {
        next(error);

    }
}

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await BookModel.find();
        res.status(200).json (books);
    } catch (error) {
        next(error)
    }
}

export const getOneBook = async (req, res, next) => {
    try {
       await BookModel.findById(req.params.id);
        res.status(200).json("View book");
    } catch (error) {
        next(error)
    }
}


export const updateBook = async (req, res, next) => {
    try {
        await BookModel.findByIdAndUpdate(req.params.id)
        res.status(200).json('Book updated Successfully!');
    } catch (error) {
        next(error)
    }
}


export const deleteBook = async (req, res, next) => {

    try {
        await BookModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Book deleted Successfully!');

    } catch (error) {
        next(error)

    }

}