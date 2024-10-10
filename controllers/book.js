import { BookModel } from "../model/book.js";
import { bookValidationSchema, updateBookValidationSchema } from "../validators/book.js";


export const addBook = async (req, res, next) => {
    try {
        // validator
        const {error, value} = bookValidationSchema.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }

        // console.log("Request body-->",await  req)
       const showbook= await BookModel.create(req.body);
        res.status(201).json(`Book titled '${showbook.title}' added successfully`);
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
     const viewbook = await BookModel.findById(req.params.id);
        res.status(200).json(viewbook);
    } catch (error) {
        next(error)
    }
}


export const updateBook = async (req, res, next) => {
    try { 
        // validator
        const {error, value} = updateBookValidationSchema.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }

        const updatebook = await BookModel.findByIdAndUpdate(req.params.id)
        res.status(200).json(updatebook);
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