import { Request, Response } from "express";
import { SignupUC } from "../../business/usecase/signupUC";

export const signupEndpoint = async (req: Request, res: Response) => {
    const useCase = new SignupUC()

    const input = {
        email: req.body.email,
        password: req.body.password
    }
    
    try {
        
        await useCase.execute(input)

        res.send("Usuário criado")
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
}