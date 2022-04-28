import app from "../src/app";
import supertest from "supertest";
import { prisma } from "../database.js";
import { createUser, generateUser } from "./factories/userFactory";
import {faker} from "@faker-js/faker";

const agent = supertest(app);



describe("POST /sign-up",  () => {
  beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users CASCADE;`;
  });
  afterAll(async () => {
    await prisma.$disconnect();
});
  it("returns 201 for valid params", async () => {
    const user = await generateUser();
    const result = await agent.post("/sign-up").send({ email : user.email, password : user.password });
    const status = result.status;
    const userCreated = await prisma.user.findUnique({
      where: { email: user.email },
    });
    expect(status).toEqual(201);
    expect(userCreated).not.toBeNull();
  });
  it("returns 409 for users with same email", async () => {
    const user = await createUser();
    const result = await agent.post("/sign-up").send({ email : user.email, password : user.password });
    const status = result.status;
    expect(status).toEqual(409);
  })
  it("returns 422 with missing email in body", async () => {
    const result = await agent.post("/sign-up").send({ email : "", password : "123" });
    const status = result.status;
    expect(status).toEqual(422);
  })
  it("returns 422 with missing password in body", async () => {
    const result = await agent.post("/sign-up").send({ email : faker.internet.email(), password : "" });
    const status = result.status;
    expect(status).toEqual(422);
  })

  it("returns 422 when body isn't in the expected format", async () => {
    const result = await agent.post("/sign-up").send({ email : faker.random.number(), password : faker.random.number() });
    const status = result.status;
    expect(status).toEqual(422);
  })
});




