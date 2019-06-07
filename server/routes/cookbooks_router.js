'use strict'

/**
 * Dependencies
 */

const express = require('express')
const Cookbook = require('../models/Cookbook')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /cookbooks
 */

router.route('')
  .get(async (req, res) => {
    try {
      const cookbooks = await Cookbook.all()
      res.status(200).json(cookbooks)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .post(async (req, res) => {
    try {
      const [id] = await Cookbook.create(req.body)

      const cookbook = await Cookbook.find(id)

      res.status(201).json(cookbook)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })

/**
 * Routes
 *   GET,PUT,DELETE /cookbooks/:id
 */

router.route('/:id')
  .get(async (req, res) => {
    try {
      const cookbook = await Cookbook.find(req.params.id)
      res.status(200).json(cookbook)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Server error.' } })
    }
  })
  .put(async (req, res) => {
    try {
      const count = await Cookbook.update(req.params.id, req.body)

      if (count > 0) {
        const cookbook = await Cookbook.find(req.params.id)

        res.status(200).json(cookbook)
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
      const count = await Cookbook.remove(req.params.id)

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
