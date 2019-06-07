'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class Ingredient {
  static async all() {
    return await db_client('ingredients')
  }

  static async find(id) {
    return db_client('ingredients').where({ id }).first()
  }

  static async create(ingredient) {
    return await db_client('ingredients').insert(ingredient)
  }

  static async update(id, ingredient) {
    return db_client('ingredients')
      .where({ id }).first()
      .update(ingredient)
  }

  static async remove(id) {
    return await db_client('ingredients')
      .where({ id: id })
      .del()
  }
}

/**
 * Export model
 */

module.exports = Ingredient
