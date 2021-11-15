import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    recipes: Recipe[] = [
        new Recipe('Recipe 1', 'Just a test recipe 1', 'https://i.pinimg.com/564x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg'),
        new Recipe('Recipe 2', 'Just a test recipe 2', 'https://i.pinimg.com/564x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg'),
    ];

    getRecipe() {
        return this.recipes.slice();
    }
}