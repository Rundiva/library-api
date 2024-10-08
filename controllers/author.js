import { AuthorModel } from "../model/author.js";

export const addAuthor = async (req, res, next) => {

    try {
        await AuthorModel.create(req.body);
        res.status(201).json('Author added Successfully!');
    } catch (error) {

        next(error);

    }

}

export const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await AuthorModel.find(req.body);
        res.status(200).json(authors);
    } catch (error) {
     
        next(error);

    }
}

export const getOneAuthor = async (req, res, next) => {
    try {
        await AuthorModel.findById(req.params.id);
        res.status(200).json('View Author!');
    } catch (error) {
        next(error)
    }
}


export const updateAuthor = async (req, res, next) => {
    try {
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