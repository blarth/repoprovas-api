import userRepository, { CreateUserData } from "../repositories/userRepository.js"
import * as errorUtils from "../utils/errorUtils.js"
import bcrypt from "bcrypt"

export async function createUser(createUserData : CreateUserData){
    await getUser(createUserData.email);
    const encryptedPassword = encryptPassword(createUserData.password)
    await userRepository.insert({email : createUserData.email, password : encryptedPassword})
    return
}

export async function getUser(email : string){
    const user = await userRepository.findUserByEmail(email)
    if(user) throw errorUtils.conflictError("user email is unique")
    return user
}

function encryptPassword(password : string){
    return bcrypt.hashSync(password, 10)
}