'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class Dish {
  static async all() {
    return await db_client('dishes')
  }

  static async find(id) {
    return db_client('dishes').where({ id }).first()
  }

  static async create(dish) {
    return await db_client('dishes').insert(dish)
  }

  static async update(id, dish) {
    return db_client('dishes')
      .where({ id }).first()
      .update(dish)
  }

  static async remove(id) {
    return await db_client('dishes')
      .where({ id: id })
      .del()
  }
}

/**
 * Export model
 */

module.exports = Dish
