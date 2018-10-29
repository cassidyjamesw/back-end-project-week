exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("notes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("notes").insert([
        {
          title: "Note One",
          content: "This is Note One",
          tag: "sample tag"
        },
        {
          title: "Note Two",
          content: "This is Note Two",
          tag: "sample tag two"
        },
        {
          title: "Note Three",
          content: "This is Note Three"
        }
      ]);
    });
};
