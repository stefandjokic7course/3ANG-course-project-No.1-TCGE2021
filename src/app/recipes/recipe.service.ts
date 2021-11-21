import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    recipes: Recipe[] = [
        new Recipe(
            'Recipe 1',
            'Just a test recipe 1',
            'https://i.pinimg.com/564x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bread', 20)
        ]),
        new Recipe(
            'Recipe 2',
            'Just a test recipe 2',
            'https://i.pinimg.com/564x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051.jpg',
            [
                new Ingredient('Meat', 4),
                new Ingredient('Potato', 20)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipe() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredientsFromRecipe(ingredients);
    }
}