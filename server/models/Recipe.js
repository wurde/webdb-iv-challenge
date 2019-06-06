'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class Recipe {
  static async all() {
    return await db_client('recipes')
  }

  static async find(id) {
    return db_client('recipes').where({ id }).first()
  }

  static async create(recipe) {
    return await db_client('recipes').insert(recipe)
  }

  static async update(id, recipe) {
    return db_client('recipes')
      .where({ id }).first()
      .update(recipe)
  }

  static async remove(id) {
    return await db_client('recipes')
      .where({ id: id })
      .del()
  }
}

/**
 * Export model
 */

module.exports = Recipe
