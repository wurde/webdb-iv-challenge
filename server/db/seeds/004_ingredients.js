
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'Tortilla'},
        {id: 2, name: 'Salt'},
        {id: 3, name: 'Noodles'}
      ]);
    });
};
