import { Router } from "express";
import validateSchemaMiddleware from "../middlewares/verifySchemaMiddleware.js";
import { userSchema } from "../schemas/userSchema.js";
import * as authController from "../controllers/authController.js";
const authRouter = Router();

authRouter.post(
  "/sign-in",
  validateSchemaMiddleware(userSchema),
  authController.login
);

export default authRouter;
