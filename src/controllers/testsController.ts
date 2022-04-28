import { Request, Response } from "express"
import * as testService from "../services/testService.js"



export async function getByDiscipline(req: Request, res: Response){
    const tests = await testService.getByDiscipline()

    res.send(tests)
}
export async function getByDisciplineByName(req: Request, res: Response){
    const {name} = req.params
    const tests = await testService.getByDisciplineName(name)

    res.send(tests)
}

export async function getByTeacher(req: Request, res: Response){
    const tests = await testService.getByTeacher()

    res.send(tests)
}
export async function getByTeacherName(req: Request, res: Response){
    const {name} = req.params
    const tests = await testService.getByTeacherName(name)

    res.send(tests)
}

export async function increaseView(req: Request, res: Response){
    const {id} = req.params
    await testService.increaseView(Number(id))

    res.sendStatus(200)
}