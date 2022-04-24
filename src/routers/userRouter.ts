import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/verifySchemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";
import * as userController from "../controllers/userController.js";
const userRouter = Router();

userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(userSchema),
  userController.postUser
);

export default userRouter;
