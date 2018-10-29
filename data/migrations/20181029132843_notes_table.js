exports.up = function(knex, Promise) {
  return knex.schema.createTable("notes", function(tbl) {
    tbl.increments();
    tbl.string("title", 128).notNullable();
    tbl.unique("title");
    tbl.string("textBody", 128).notNullable();
    tbl.string("tags", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("notes");
};
