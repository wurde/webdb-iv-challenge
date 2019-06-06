'use strict'

/**
 * Dependencies
 */

const express = require('express')
const Recipe = require('../models/Recipe')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /recipes
 */

router.route('')
  .get(async (req, res) => {
    try {
      const recipes = await Recipe.all()
      res.status(200).json(recipes)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .post(async (req, res) => {
    try {
      const [id] = await Recipe.create(req.body)

      const recipe = await Recipe.find(id)

      res.status(201).json(recipe)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })

/**
 * Routes
 *   GET,PUT,DELETE /recipes/:id
 */

router.route('/:id')
  .get(async (req, res) => {
    try {
      const recipe = await Recipe.find(req.params.id)
      res.status(200).json(recipe)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .put(async (req, res) => {
    try {
      const count = await Recipe.update(req.params.id, req.body)

      if (count > 0) {
        const recipe = await Recipe.find(req.params.id)

        res.status(200).json(recipe)
      } else {
        res.status(404).json({ error: { message: 'Record not found.' } })
      }
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .delete(async (req, res) => {
    try {
      const count = await Recipe.remove(req.params.id)

      if (count > 0) {
        res.sendStatus(204)
      } else {
        res.status(404).json({ error: { message: 'Record not found.' } })
      }
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })

/**
 * Export router
 */

module.exports = router
