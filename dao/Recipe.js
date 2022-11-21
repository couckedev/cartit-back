const db = require("../db/db");

class Recipe {
    async create(recipe) {
        const created_at = db.fn.now();
        const updated_at = db.fn.now();
        const created_recipe = await db('recipe').insert({name: recipe.name,created_at,updated_at}).returning('*');
        return created_recipe[0];
    }
}

module.exports = new Recipe();