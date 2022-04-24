import { Request, Response } from "express"
import { CreateUserData } from "../repositories/userRepository"
import * as authService from "../services/authService.js"

export async function login(req: Request, res : Response){
    const user : CreateUserData = req.body
    const token = await authService.login(user)
    res.status(200).send(token) 
}