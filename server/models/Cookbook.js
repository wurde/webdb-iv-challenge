'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class Cookbook {
  static async all() {
    return await db_client('cookbooks')
  }

  static async find(id) {
    return db_client('cookbooks').where({ id }).first()
  }

  static async create(cookbook) {
    return await db_client('cookbooks').insert(cookbook)
  }

  static async update(id, cookbook) {
    return db_client('cookbooks')
      .where({ id }).first()
      .update(cookbook)
  }

  static async remove(id) {
    return await db_client('cookbooks')
      .where({ id: id })
      .del()
  }
}

/**
 * Export model
 */

module.exports = Cookbook
