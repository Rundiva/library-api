import { Schema, Types, model } from "mongoose";

const bookSchema = new Schema({
    title: {type: String, required: true},
    summary: { type: String },
    author: { type: Types.ObjectId, ref: 'Author'},
    cover: { type: String, required: true},
    content: { type: String, require: true},
    // img_url: {type: String}
});

export const BookModel = model('Book', bookSchema )