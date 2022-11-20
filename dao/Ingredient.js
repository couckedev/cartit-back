const db = require("../db/db");

class Ingredient {    
    async create(ingredients) {
        for(const i in ingredients) {
            ingredients[i]['id'] = await db('ingredient').insert(ingredients[i]).returning('id');
        }
        return ingredients;
    }
}

module.exports = new Ingredient();