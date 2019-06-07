
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, dishes_id: 1, name: 'Fire Taco', instructions: 'Make the taco.' },
        {id: 2, dishes_id: 1, name: 'Mild Taco', instructions: 'Make the taco.' },
        {id: 3, dishes_id: 2, name: 'Angel Hair Pasta', instructions: 'Make the pasta.' },
        {id: 4, dishes_id: 2, name: 'Fettuccine Hair Pasta', instructions: 'Make the pasta.' }
      ]);
    });
};
