import { prisma } from "../../database.js";
import { Session } from ".prisma/client";

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export type UserTokenData = Omit<Session, "id">;

export async function create(userToken: UserTokenData) {
  await prisma.session.create({
    data: userToken,
  });
}

export async function findByUserId(userId: number) {
  const session = await prisma.session.findFirst({
    where: {
      userId,
    },
  });

  return session;
}

export async function findByToken(token: string) {
  const session = await prisma.session.findFirst({
    where: {
      token,
    },
  });

  return session;
}
