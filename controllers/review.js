import { ReviewModel } from "../model/review.js";

export const addReview = async (req, res, next) => {
       try {
        await ReviewModel.create(req.body);
         res.status(200).json ('Review added Successfully!');
       } catch (error) {
        next(error);
        
       }

}

export const getAllReviews = async(req, res, next) => {
       try {
        await ReviewModel.find(req.body);
         res.json ('List Review!');
 
       } catch (error) {
        next (error);
        
       }
}

export const getOneReview = async(req, res, next) => {
    try {
        await ReviewModel.find(req.body);
        res.json ('View Review!');
    } catch (error) {
        next(error);
        
    }
}


export const updateReview =(req, res, next) => {
    res.json ('Review updated Successfully!');
}

export const deleteReview =(req, res, next) => {
    res.json ('Review deleted Successfully!');
}