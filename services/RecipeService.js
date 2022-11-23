const Recipe = require("../dao/Recipe");

class RecipeService {    
    async create(recipe) {
        return await Recipe.create(recipe);
    }

    async add(recipe_id,ingredient_to_add) {
        return await Recipe.add(recipe_id,ingredient_to_add);
    }
}

module.exports = new RecipeService();