import { UserModel } from "../model/user.js";

export const registerUser = async (req, res, next) => {
    try {
     await UserModel.create(req.body);
      res.status(201).json ('User registered Successfully!');
    } catch (error) {
     next(error)
     
    }
}

export const logInUser = (req, res, next) => {
    res.status(200).json('User checked in!');


export const logOutUser = (req, res, next) => {
    res.status(200).json('User checked out!');
}
