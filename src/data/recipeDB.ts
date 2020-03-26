import { RecipeGateway } from "../business/gateways/RecipeGateway";
import { Recipe } from "../business/entities/recipe";
import { BaseDB } from "./baseDB";

export class RecipeDB extends BaseDB implements RecipeGateway {

    
  
    private userTableName = "recipes";

    async createRecipe(recipe: Recipe): Promise<void>{
        
        await this.connection.insert({
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            creationDate: recipe.getCreationDate(),
            userId: recipe.getUserId()
        }).into(this.userTableName)
    }
}