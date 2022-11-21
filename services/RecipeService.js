const Recipe = require("../dao/Recipe");

class RecipeService {    
    async create(recipe) {
        return await Recipe.create(recipe);
    }
}

module.exports = new RecipeService();