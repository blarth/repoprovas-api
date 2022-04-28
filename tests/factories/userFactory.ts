import { prisma } from "../../database.js";
import { faker } from '@faker-js/faker';
import { CreateUserData } from "../../src/repositories/userRepository.js";
import bcrypt from "bcrypt"



export async function createUser () {
    const user : CreateUserData = {
      email: faker.internet.email(),
      password: faker.lorem.word()
    } ;
  
    const insertedUser = await prisma.user.create({
          data: {
              email: user.email,
              password: bcrypt.hashSync(user.password, 10)
          }
      });
  
    return user;
  }


  export async function generateUser(){
    const user : CreateUserData = {
        email: faker.internet.email(),
        password: faker.lorem.word()
      } ;

      return user
  }