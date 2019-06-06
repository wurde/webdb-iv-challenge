'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', (table) => {
    table.increments()
    table.float('quantity').notNullable()
    table.integer('ingredients_id')
      .notNullable()
      .references('id').inTable('ingredients')
    table.integer('recipes_id')
      .notNullable()
      .references('id').inTable('recipes')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe_ingredients')
};
