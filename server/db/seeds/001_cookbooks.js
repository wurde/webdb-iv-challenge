
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cookbooks').del()
    .then(function () {
      // Inserts seed entries
      return knex('cookbooks').insert([
        {id: 1, name: 'Italian'},
        {id: 2, name: 'Austin Tacos'}
      ]);
    });
};
