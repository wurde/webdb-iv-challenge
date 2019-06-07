
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, cookbooks_id: 2, name: 'Taco'},
        {id: 2, cookbooks_id: 1, name: 'Pasta'},
        {id: 3, cookbooks_id: 1, name: 'Salad'}
      ]);
    });
};
