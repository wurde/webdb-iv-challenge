'use strict'

/**
 * Dependencies
 */

const express = require('express')
const Ingredient = require('../models/Ingredient')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /ingredients
 */

router.route('')
  .get(async (req, res) => {
    try {
      const ingredients = await Ingredient.all()
      res.status(200).json(ingredients)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .post(async (req, res) => {
    try {
      const [id] = await Ingredient.create(req.body)

      const ingredient = await Ingredient.find(id)

      res.status(201).json(ingredient)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })

/**
 * Routes
 *   GET,PUT,DELETE /ingredients/:id
 */

router.route('/:id')
  .get(async (req, res) => {
    try {
      const ingredient = await Ingredient.find(req.params.id)
      res.status(200).json(ingredient)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .put(async (req, res) => {
    try {
      const count = await Ingredient.update(req.params.id, req.body)

      if (count > 0) {
        const ingredient = await Ingredient.find(req.params.id)

        res.status(200).json(ingredient)
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
      const count = await Ingredient.remove(req.params.id)

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
