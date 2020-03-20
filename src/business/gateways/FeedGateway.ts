import { Recipe } from "../entities/recipe";

export interface FeedGateway {
    getFeedForUser(userId: string): Promise<Recipe[]>
}