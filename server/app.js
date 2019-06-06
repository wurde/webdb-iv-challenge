'use strict'

/**
 * Dependencies
 */

const express = require('express')
const helmet = require('helmet')
const Dish = require('./models/Dish')
const Recipe = require('./models/Recipe')

/**
 * Constants
 */

const port = process.env.PORT || 8080

/**
 * Define app
 */

const app = express()

/**
 * Middleware
 */

app.use(helmet())
app.use(express.json())

/**
 * Routes
 *   /
 */

app.get('/', (req, res) => {
  res.redirect('/dishes')
})

/**
 * Routes
 *   GET, POST /dishes
 */

app.route('/dishes')
  .get(async (req, res) => {
    try {
      let dishes = await Dish.all()
      res.status(200).json(dishes)
    } catch(err) {
      console.error(err)
      res.sendStatus(500)
    }
  })
  .post('/dishes', async (req, res) => {
    try {
      let [id] = await Dish.insert(req.body)
      res.status(200).json(id)
    } catch(err) {
      console.error(err)
      res.sendStatus(500)
    }
  })

/**
 * Routes
 *   GET, POST /recipes
 */

app.route('/recipes')
  .get(async (req, res) => {
    try {
      let recipes = await Recipe.all()
      res.status(200).json(recipes)
    } catch(err) {
      console.error(err)
      res.sendStatus(500)
    }
  })
  .post('/recipes', async (req, res) => {
    try {
      let [id] = await Recipe.insert(req.body)
      res.status(200).json(id)
    } catch(err) {
      console.error(err)
      res.sendStatus(500)
    }
  })

/**
 * Start server
 */

if (module === require.main) {
  app.listen(port, () => {
    console.log(`Express running on port ${port}.`)
  })
}

/**
 * Export app
 */

module.exports = app
