
import { Schema, model } from "mongoose";

const userSchema = new Schema({

    firstName : {
        type: String,
    },

    lastName : {
        type: String,
    },

    Email : {
        type : String,
    },

    Password: {
        type : String,
    }

});
export const newUserModel = model('user', userSchema);

// const userSchema = new Schema({

//     Email : {
//         type : String,
//     },

//     Password: {
//         type : String,
//     }

// });
// export const userModel = model('user', userSchema);
