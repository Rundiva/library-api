
import { Schema, model } from "mongoose";

const userSchema = new Schema({

    firstName : { type: String },

    lastName : {type: String },

    Email : {type : String , required : true },

    Password: { type : String, required: true }

});
export const UserModel = model('User', userSchema);

