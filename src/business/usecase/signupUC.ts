import { v4 } from "uuid";
import { User } from "../entities/user";
import { UserDB } from "../../data/userDB";
import * as bcrypt from "bcrypt";

interface SignupInput {
    email: string
    password: string
}

export class SignupUC {

    async execute(input: SignupInput) {
        try {
            const userId = v4()

            const hashPassword = await bcrypt.hash(input.password, 10)

            const newUser = new User(userId, input.email, hashPassword)

            const userDB = new UserDB()

            await userDB.createUser(newUser)
        } catch (e) {
            console.log(e)
            throw new Error("Problema ao criar usuário")
        }

    }
}