import { Schema, Types, model } from "mongoose";

const bookSchema = new Schema({
    title: {type: String, required: true},
    summary: { type: String, required: true},
    // author: { types: Types.ObjectId, ref: 'Author'},
    cover: { type: String, required: true},
    content: { type: String, require: true}
});

export const BookModel = model('Book', bookSchema )