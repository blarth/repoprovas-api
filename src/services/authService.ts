import { NextFunction, Request, Response } from "express"
import * as authRepository from "../repositories/authRepository.js"
import { CreateUserData } from "../repositories/userRepository.js"
import * as error from "../utils/errorUtils.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { Session, User } from "@prisma/client";



export async function login({email ,password}: CreateUserData){
    
        const user : User = await getUser(email)
        if(!bcrypt.compareSync(password, user.password)) throw error.authError("Unauthorized")
        
        const session : Session = await authRepository.findByUserId(user.id);
        
        if(session){
            try {
                jwt.verify(session.token, "hello-word");
                return { token: session.token };
            } catch (err) {
                console.log(err)
            }
        }

        
        
        const token = jwt.sign({ userId: user.id }, "hello-word");

        await authRepository.create({token, userId:user.id});
    
        return { token };

    
}


async function getUser(email : string){
    const user : User = await authRepository.findUserByEmail(email)
    if(!user) throw error.authError("Unauthorized")
    return user
}