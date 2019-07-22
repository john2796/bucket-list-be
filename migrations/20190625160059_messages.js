// Create contacts table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', function(tbl) {
        tbl.increments('id')
            .unsigned()
            .unique();
        tbl.integer('contact_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('contacts')
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        tbl.string('message', 1000)
            .notNullable();
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('messages');
};
