exports.up = function(knex, Promise) {
  return knex.schema.createTable("notes", function(tbl) {
    tbl.increments();
    tbl.string("title", 128).notNullable();
    tbl.unique("title");
    tbl.string("content", 128).notNullable();
    tbl.boolean("tag").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
