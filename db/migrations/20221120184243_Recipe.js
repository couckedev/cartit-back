exports.up = function (knex) {
    return knex.schema.createTable('recipe', function (table) {
        table.increments();
        table.string('name').unique();
        table.timestamps();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('recipe')
};
