import { AuthorModel } from "../model/author.js";

export const addAuthor = async(req, res, next) => {
    
       try {
        await AuthorModel.create(req.body);
         res.status(200).json ('Author added successfully');
       } catch (error) {
        next(error);
        
       }

}

export const getAllAuthors = async(req, res, next) => {

       try {
    
        const authors =  await AuthorModel.find();
         res.json (authors);
       } catch (error) {
        next(error);
        
       }
}

export const getOneAuthor = async(req, res, next) => {
    try {
        await AuthorModel.find();
        res.json ('View Author!');
    } catch (error) {
        next(error);
        
    }
}


export const updateAuthor =(req, res, next) => {
    res.json ('Author updated Successfully!');
}

export const deleteAuthor =(req, res, next) => {
    res.json ('Author deleted Successfully!');
}