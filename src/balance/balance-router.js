const express = require('express')
const BalanceService = require('./balance-service')
const { requireAuth } = require('../middleware/jwt-auth')

const balanceRouter = express.Router()

balanceRouter
  .route('/:user_name')
  .all(requireAuth)
  .get((req, res) => {
    res.json(BalanceService.getUserBalance(
              req.app.get('db'), 
              req.params.user_name))
  })

balanceRouter
  .route('/:user_name')
  .all(requireAuth)
  .patch((req, res) => {
    const { user_name, balance } = req.body

    for (const [key, value] of Object.entries(newComment))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        })

    BalanceService.updateUserBalance(
              req.app.get('db'), 
              user_name, balance)
    .then(res => {
      res
        .status(201)
    })
    .catch(next)
  })
module.exports = balanceRouter
