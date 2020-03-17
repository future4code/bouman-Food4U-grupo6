import {v4} from "uuid";
import {User} from "../entities/user";
import { UserDB } from "../../data/userDB";
import * as bcrypt from "bcrypt";

interface LoginInput {
    email: string
    password: string
}

export class LoginUC {
    async execute(input: LoginInput) {
        
        const userDB = new UserDB()

        const user = await userDB.getUserByEmail(input.email)

        if(!user) {
            throw new Error("Email incorreto")
        }

        const isPasswordCorrect = await bcrypt.compare(input.password, user.getPassword())

        if(!isPasswordCorrect) {
            throw new Error("Senha incorreta")
        }

        return true

    } 
        
}
