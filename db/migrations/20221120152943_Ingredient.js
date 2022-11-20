exports.up = function (knex) {
    return knex.schema.createTable('ingredient', function (table) {
        table.increments();
        table.string('name').unique();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('ingredient')
};
