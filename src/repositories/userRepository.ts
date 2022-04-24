import { User } from "@prisma/client";
import { prisma } from "../../database.js";

export type CreateUserData = Omit<User, "id">;
async function insert(createUserData: CreateUserData) {
    return prisma.user.create({
        data : createUserData
    })
}

async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}


export default {findUserByEmail, insert}