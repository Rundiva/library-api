import { ReviewModel } from "../model/review.js";

export const addReview = async (req, res, next) => {
       try {

        await ReviewModel.create(req.body);
         res.status(201).json ('Review added Successfully!');
       } catch (error) {
        next(error);
        
       }

}

export const getAllReviews = async(req, res, next) => {
       try {

       const reviews = await ReviewModel.find(req.body);
         res.json (reviews);
       } catch (error) {
        next (error);
        
       }
}

export const getOneReview = async(req, res, next) => {
    try {
        await ReviewModel.findById(req.params.id);
        res.status(200).json ('View Book!');
    } catch (error) {
        next(error)
    }
}


export const updateReview = async (req, res, next) => {
    try {
        await ReviewModel.findByIdAndUpdate(req.params.id)
        res.status(200).json('Book updated Successfully!');
    } catch (error) {
        next(error)

    }
}


export const deleteReview = async (req, res, next) => {

    try {
        await ReviewModel.findByIdAndDelete(req.params.id)
            res.status(200).json('Book deleted Successfully!');

    } catch (error) {
        next(error)

    }

}

