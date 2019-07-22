// Create contacts table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contacts', function(tbl) {
        tbl.increments('id')
            .unsigned()
            .unique();
        tbl.string('firstname', 255)
            .notNullable();
        tbl.string('lastname', 255)
            .notNullable();
        tbl.string('email', 255)
            .notNullable();
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('contacts');
};
