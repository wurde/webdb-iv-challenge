'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.string('instructions')
    table.integer('cookbooks_id')
      .notNullable()
      .references('id').inTable('cookbooks')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.timestamps()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes')
};
