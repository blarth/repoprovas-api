import { prisma } from "../../database.js";
import { faker } from '@faker-js/faker';
import { CreateUserData } from "../../src/repositories/userRepository.js";
import jwt from "jsonwebtoken"
import { User } from "@prisma/client";

export async function createSession (user : User) {

    const token = jwt.sign({ userId: user.id }, "hello-word");
    
          await prisma.session.create({
              data: {
                  userId: user.id,
                  token
              }
          });
  
    return {
      token
    };
  }