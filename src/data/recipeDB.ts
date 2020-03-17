import knex from "knex";
import { User } from "../business/entities/user";
import { RecipeGateway } from "../business/gateways/RecipeGateway";
import { Recipe } from "../business/entities/recipe";

export class RecipeDB implements RecipeGateway {

    private connection = knex({
      client: "mysql",
      connection: {
        host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
        port: 3306,
        user: "eduardo",
        password: "v$vdxCYsib9BsCY38k0k",
        database: "bouman-eduardo"
      }
    });
  
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