
import { UserModel } from "../model/user.js";

export const registerUser = async(req, res, next) => {
    res.status(201).json ('User registered Successfully!');
    try {
     await UserModel.create(req.body);
      
    } catch (error) {
     next(error)
     
    }
}

export const logInUser = async(req, res, next) => {
    res.status(200).json('User checked in!');

    try { 
        await UserModel.find(req.body);
        
    } catch (error) {
        next (error);
        
    }
}

export const logOutUser = (req, res, next) => {
    res.status(200).json('User checked out!');
}
