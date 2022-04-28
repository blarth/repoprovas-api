import app from "../src/app";
import supertest from "supertest";
import { prisma } from "../database.js";
import { createUser, generateUser } from "./factories/userFactory";
import {faker} from "@faker-js/faker";

const agent = supertest(app);

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users CASCADE;`;
  });
  afterAll(async () => {
    await prisma.$disconnect();
})

describe("POST /sign-in", () => {
    it("returns 201 for valid params", async () => {
        const user = await createUser();
        const result = await agent.post("/sign-in").send({ email : user.email, password : user.password });
        const status = result.status;
        const token = result.body;
        expect(status).toEqual(200);
        expect(token).not.toBeNull();
      });
    it("returns 401 for invalid password or email", async () => {
        const user = await createUser();
        const result = await agent.post("/sign-in").send({ email : user.email, password : "123" });
        const status = result.status;
        const token = result.body;  
        expect(status).toEqual(401);
        
      });
    it("returns 422 for invalid params", async () => {
        const user = await createUser();
        const result = await agent.post("/sign-in").send({ email : 123, password : 123 });
        const status = result.status;
        const token = result.body;
        expect(status).toEqual(422);
        
      });
});