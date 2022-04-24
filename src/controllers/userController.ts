import * as userService from "../services/userService.js"
import { Request, Response } from "express"
import { CreateUserData } from "../repositories/userRepository"

export async function postUser(req: Request, res : Response){
    const user : CreateUserData = req.body
    await userService.createUser(user)
    res.sendStatus(201)
}

