
import { Schema, model } from "mongoose";

const userSchema = new Schema({

    firstName : { type: String },

    lastName : {type: String },

    email : {type : String , required : true },

    password: { type : String, required: true }

});
export const UserModel = model('User', userSchema);

