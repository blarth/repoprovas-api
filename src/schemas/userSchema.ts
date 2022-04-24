import Joi from "joi";
import { CreateUserData } from "../repositories/userRepository";

export const userSchema = Joi.object<CreateUserData>({
    email: Joi.string().required(),
    password: Joi.string().required()
})