import { Request, Response, response } from "express";
import { RecipeDB } from "../../data/recipeDB";
import { RecipeUC } from "../../business/usecase/RecipeUC";

export const getRecipesEndPoint = async (req: Request, res: Response) => {
    try{
        const useCase = new RecipeUC(new RecipeDB())

        const input = {
            userId,
            title: req.body.title,
            description: req.body.description,
        }

        const userInfo = await useCase.execute(input)

        res.send({user: userInfo})

    } catch(err){
        res.status(500).send({message: err.message})
    }
}