import { Router } from "express";
import { logInUser, logOutUser, registerUser } from "../controllers/user.js";
import { userValidationSchema } from "../middleware/user.js";


const userRouter = Router();

userRouter.post('/users/register', userValidationSchema, registerUser);

userRouter.post('/users/login', userValidationSchema, logInUser);

userRouter.post('/users/logout', logOutUser);

export default userRouter;