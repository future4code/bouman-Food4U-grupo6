import { Request, Response } from "express";
import { UserDB } from "../../data/userDB";
import { SignupUC } from "../../business/usecase/signupUC";

export const signupEndpoint = async (req: Request, res: Response) => {
   
    
    try {
        const useCase = new SignupUC(new UserDB())
        const result = await useCase.execute({
            email: req.body.email,
            password: req.body.password
        })

        res.send("Usuário criado")
    } catch (err) {
        console.log(err);
        res.status(400).send({
            message: err.message,
            ...err
        });
    }
}