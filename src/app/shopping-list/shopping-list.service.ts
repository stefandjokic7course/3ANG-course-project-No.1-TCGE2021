import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    
    private ingredients: Ingredient[] = [
        new Ingredient('Appels', 5),
        new Ingredient('Tomatoes', 10)
    ];
    ingredientsChanged =  new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addNewIngredients(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}