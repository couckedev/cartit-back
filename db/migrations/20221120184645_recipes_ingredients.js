
exports.up = function(knex) {
    return knex.schema.createTable('recipes_ingredients', function (table) {
        table.increments();
        table.integer('quantity')
        table.integer('recipe_id').unsigned()
        table.integer('ingredient_id').unsigned()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('recipes_ingredients')
};

