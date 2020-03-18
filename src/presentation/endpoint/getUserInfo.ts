import { GetUserInfoUC } from "../../business/usecase/getUserInfo";
import { JWTAuthentication } from "../../utils/JWTAuthentication";

export const getUserInfoEndpoint = async (request: Request, response: Response) => {
    try {
        const jwtAuth = new JWTAuthentication()
        const userId = jwtAuth.verifyToken(request.headers.auth as string)

        const useCase = new GetUserInfoUC()

        const input = {
            userId
        }

        const userInfo = await useCase.execute(input)

        response.send({user: userInfo})
    }
    catch(e) {
        response.status(500.).send({message: e.message})
    }
}