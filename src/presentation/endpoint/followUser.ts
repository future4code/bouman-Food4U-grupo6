import { JWTAuthentication } from "../../utils/JWTAuthentication";
import { Request, Response } from "express";
import { FollowUserUC } from "../../business/usecase/FollowUserUC";
import { UserDB } from "../../data/userDB";


export const followUserEndpoint = async (request: Request, response: Response) => {
    try {
        const jwtAuth = new JWTAuthentication()

        const userId = jwtAuth.verifyToken(request.headers.auth as string)

        const userDatabase =  new UserDB()

        const useCase = new FollowUserUC(userDatabase)

        const input = {
            userId,
            userToFollowId: request.body.userToFollowId
        }

        await useCase.execute(input)

        response.send({message: "Usuário seguido com sucesso"})
    }
    catch(e) {
        response.status(500.).send({message: e.message})
    }
}