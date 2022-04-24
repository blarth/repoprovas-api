import jwt from 'jsonwebtoken';
import * as authRepository from "../repositories/authRepository.js";
import { NextFunction, Request, Response } from 'express';
import * as error from "../utils/errorUtils.js"

export default async function validateTokenMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  const secretKey = "hello-word";
  if(!token) throw error.authError("Token is required");
  
  const session = await authRepository.findByToken(token);
  if(!session) throw error.authError("Token is invalid");

  try {
    const { userId } = jwt.verify(token, secretKey) as { userId: number };
    res.locals.user = { userId };
  } catch (error) {
    console.log(error)
  }
      
    next();
}