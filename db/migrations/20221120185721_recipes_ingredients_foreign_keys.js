
exports.up = function(knex) {
    return knex.schema.alterTable('recipes_ingredients', function (table) {
        table.foreign('recipe_id','recipes_ingredients_recipe_id_fk').references('recipe.id')
        table.foreign('ingredient_id','recipes_ingredients_ingredient_id_fk').references('ingredient.id')
    });
};

exports.down = function(knex) {
    return knex.schema.alterTable('recipes_ingredients', function (table) {
        table.dropForeign('recipe_id','recipes_ingredients_recipe_id_fk')
        table.dropForeign('ingredient_id','recipes_ingredients_ingredient_id_fk')
    })
};
