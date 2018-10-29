exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("notes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("notes").insert([
        {
          title: "Note One",
          textBody: "This is Note One",
          tags: "sample tag"
        },
        {
          title: "Note Two",
          textBody: "This is Note Two",
          tags: "sample tag two"
        },
        {
          title: "Note Three",
          textBody: "This is Note Three"
        }
      ]);
    });
};
