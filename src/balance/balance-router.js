const express = require('express');
const BalanceService = require('./balance-service');
const { requireAuth } = require('../middleware/jwt-auth');

const balanceRouter = express.Router();
const jsonBodyParser = express.json();

balanceRouter
  .route('/:user_name')
  .get(requireAuth, (req, res, ) => {

    BalanceService.getUserBalance(
              req.app.get('db'), 
              req.params.user_name)
              .then(balance => {
                res.json(balance)
              })
    });

balanceRouter
  .route('/:user_name')
  .patch(jsonBodyParser, requireAuth, (req, res, next) => {
    const { user_name, balance } = req.body;

      if (user_name == null || balance == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        });

    BalanceService.updateUserBalance(
              req.app.get('db'), 
              user_name, balance)
              .then(response => {
                res
                  .status(200)
                  .json(response)
              })
              .catch(next);
  });

  balanceRouter
  .route('/:user_name')
  .post((req, res, next) => {

    const user_name = req.params.user_name;
    const newUser = { user_name };

    BalanceService.insertUserBalance(
              req.app.get('db'), 
              newUser.user_name)
              .then(() => {
                res
                  .status(201)
                  .end()
              })
              .catch(next);
  });

module.exports = balanceRouter;
