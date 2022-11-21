const db = require("../db/db");

class Ingredient {    
    async create(ingredient) {
        const created_ingredient = await db('ingredient').insert({name: ingredient.name}).returning('*');
        return created_ingredient[0];
    }
}

module.exports = new Ingredient();