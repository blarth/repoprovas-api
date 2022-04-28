import * as testRepository from "../repositories/testRepository.js"

export async function getByDiscipline(){
    return await testRepository.getByDiscipline()
}

export async function getByDisciplineName(disciplineName : string){
    return await testRepository.getByDisciplineName(disciplineName)
}

export async function getByTeacher(){
    return await testRepository.getByTeacher()
}
export async function getByTeacherName(name : string){
    return await testRepository.getByTeacherName(name)
}