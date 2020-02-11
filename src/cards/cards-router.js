const express = require('express')
const path = require('path')
const CardsService = require('./cards-service')
const { requireAuth } = require('../middleware/jwt-auth')
const jsonBodyParser = express.json()

const cardsRouter = express.Router()

cardsRouter
  .route('/')
  .post(requireAuth, jsonBodyParser, (req, res, next) => {
    const { decks } = req.body

      if (value == null)
        return res.status(400).json({
          error: `Missing number of decks in request body`
        })

    CardsService.createShoe(
      req.app.get('db'),
      decks
    )
    .then(comment => {
      res
        .status(201)
        .location(path.posix.join(req.originalUrl, `/${comment.id}`))
        .json(CommentsService.serializeComment(comment))
    })
    .catch(next)
  })

module.exports = cardsRouter