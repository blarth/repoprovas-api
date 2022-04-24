import { Request, Response } from "express"
import * as testService from "../services/testService.js"



export async function getByDiscipline(req: Request, res: Response){
    const tests = await testService.getByDiscipline()

    res.send(tests)
}

export async function getByTeacher(req: Request, res: Response){
    const tests = await testService.getByTeacher()

    res.send(tests)
}