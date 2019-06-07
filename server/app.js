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
 */

app.use('/', require('./routes/root_router'))
app.use('/cookbooks', require('./routes/cookbooks_router'))
app.use('/dishes', require('./routes/dishes_router'))
app.use('/ingredients', require('./routes/ingredients_router'))
app.use('/recipes', require('./routes/recipes_router'))

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
