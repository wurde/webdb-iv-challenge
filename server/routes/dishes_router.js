'use strict'

/**
 * Dependencies
 */

const express = require('express')
const Dish = require('../models/Dish')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /dishes
 */

router.route('')
  .get(async (req, res) => {
    try {
      const dishes = await Dish.all()
      res.status(200).json(dishes)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .post(async (req, res) => {
    try {
      const [id] = await Dish.create(req.body)

      const dish = await Dish.find(id)

      res.status(201).json(dish)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })

/**
 * Routes
 *   GET,PUT,DELETE /dishes/:id
 */

router.route('/:id')
  .get(async (req, res) => {
    try {
      const dish = await Dish.find(req.params.id)
      res.status(200).json(dish)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .put(async (req, res) => {
    try {
      const count = await Dish.update(req.params.id, req.body)

      if (count > 0) {
        const dish = await Dish.find(req.params.id)

        res.status(200).json(dish)
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
      const count = await Dish.remove(req.params.id)

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
