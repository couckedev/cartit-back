const Ingredient = require("../dao/Ingredient");

class IngredientService {    
    async create(ingredients) {
        return Ingredient.create(ingredients);
    }
}

module.exports = new IngredientService();