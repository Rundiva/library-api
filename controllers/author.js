import { AuthorModel } from "../model/author.js";
import { authorValidationSchema, updateAuthorValidationSchema } from "../validators/author.js";

export const addAuthor = async (req, res, next) => {

    try {
        const {error, value} = authorValidationSchema.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        await AuthorModel.create(value);
        res.status(201).json("Author added successfully");
    } catch (error) {

        next(error);

    }

}

export const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await AuthorModel.find();
        res.status(200).json(authors);
    } catch (error) {
     
        next(error);

    }
}

export const getOneAuthor = async (req, res, next) => {
    try {
        const authors = await AuthorModel.findById(req.params.id);
        res.status(200).json(authors);
    } catch (error) {
        next(error)
    }
}


export const updateAuthor = async (req, res, next) => {
    try {
        const {error, value} = updateAuthorValidationSchema.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        await AuthorModel.findByIdAndUpdate(req.params.id)
        res.status(200).json('Author updated Successfully!');
    } catch (error) {
        next(error)
    }
}



export const deleteAuthor = async (req, res, next) => {

    try {
        await AuthorModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Author deleted Successfully!');

    } catch (error) {
        next(error)

    }

}