const Ingredient = require("../dao/Ingredient");

class IngredientService {    
    async create(data) {
        return Ingredient.create({})
    }
}

module.exports = new IngredientService();