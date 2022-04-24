import { Router } from "express";
import * as testController from "../controllers/testsController.js"
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";

const testsRouter = Router();

testsRouter.get('/tests/disciplines', validateTokenMiddleware, testController.getByDiscipline)
testsRouter.get('/tests/teachers', validateTokenMiddleware, testController.getByTeacher)

export default testsRouter;  