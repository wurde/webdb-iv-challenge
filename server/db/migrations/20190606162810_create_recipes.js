'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.integer('dishes_id')
      .notNullable()
      .references('id').inTable('dishes')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes')
}
