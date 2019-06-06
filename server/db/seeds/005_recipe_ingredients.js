
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, recipes_id: 1, ingredients_id: 1, quantity: 2},
        {id: 2, recipes_id: 1, ingredients_id: 1, quantity: 2},
        {id: 3, recipes_id: 1, ingredients_id: 1, quantity: 2}
      ]);
    });
};
