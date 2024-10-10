
import { UserModel } from "../model/user.js";
import { loginUserValidationSchema, registerUserValidationSchema } from "../validators/user.js";

export const registerUser = async(req, res, next) => {
    
    try {
        const {error, value} = registerUserValidationSchema.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
     await UserModel.create(req.body);
     res.status(201).json ('User registered Successfully!');
    } catch (error) {
     next(error)
     
    }
}

export const logInUser = async(req, res, next) => {
   
    try { 
        const {error, value} = loginUserValidationSchema.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        await UserModel.find(req.body);
        res.status(200).json('User checked in!');

        
    } catch (error) {
        next (error);
        
    }
}

export const logOutUser = (req, res, next) => {
    res.status(200).json('User checked out!');
}
