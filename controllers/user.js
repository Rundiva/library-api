import { UserModel } from "../model/user.js";

export const registerUser= async(req, res, next) => {

   try {
    await UserModel.create(req.body);
     res.json('User Registered!');
   } catch (error) {
    next (error)
    
   }
}

export const logInUser = async (req, res, next) => {
   try {
    await UserModel.find(req.body);
     res.json('User checked in!');
   } catch (error) {
    next (error)
    
   }
}
    
 
export const logOutUser = (req, res, next) => {
    res.json('User checked out!');
}
