const Ingredient = require("../dao/Ingredient");

class IngredientService {    
    async create(ingredient) {
        return await Ingredient.create(ingredient);
    }
}

module.exports = new IngredientService();