import { Schema, Types, model } from "mongoose";

const reviewSchema = new Schema({
    rating: {type: Number, required: true},
    comment: {type: String},
    // book: {type: Types.ObjectId, ref: 'Book'},
    // user: { type: Types.ObjectId, ref: 'User'}
});

export const ReviewModel = model('Review', reviewSchema)