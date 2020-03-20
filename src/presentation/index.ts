import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoint/signup";
import { loginEndpoint } from "./endpoint/login";
import { SignupUC } from "../business/usecase/signupUC";
import { getRecipesEndPoint } from "./endpoint/recipes";
import { followUserEndpoint } from "./endpoint/followUser";
import { getFeedEndPoint } from "./endpoint/feed";

const app = express();
app.use(express.json());

app.post('/signup', signupEndpoint, async (request: Request, response: Response) => {
    const useCase = new SignupUC()

    const input = {
        email: request.body.email,
        password: request.body.password
    }

    try {
        await useCase.execute(input)

    response.send({message: "Usuário criado"})
    } catch(e) {
        response.status(500).send({message: e.message})
    }
    
})

app.post('/login', loginEndpoint);
app.post('/create/recipe', getRecipesEndPoint)
app.post('/user/follow', followUserEndpoint)
app.get('/feed', getFeedEndPoint)

export default app;
