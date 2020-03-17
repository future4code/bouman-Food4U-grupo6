import { Request, Response, response } from "express";
import { RecipeDB } from "../../data/recipeDB";
import { RecipeUC } from "../../business/RecipeUC";

export const getRecipesEndPoint = async (req: Request, res: Response) => {
    try{
        const jwtAuth = new JWTAtuthentication()
        const userId = jwtAuth.verifyToken(req.headers.auth as string)

        const recipeDatabase = new RecipeDB()
        const useCase = new RecipeUC(recipeDatabase)

        const input = {
            userId,
            title: req.body.title,
            description: req.body.description,
        }

        const userInfo = await useCase.execute(input)

        response.send({user: userInfo})

    } catch(err){
        res.status(500).send({message: err.message})
    }
}