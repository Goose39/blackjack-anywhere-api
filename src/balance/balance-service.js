const BalanceService = {
  getUserBalance(db, user_name) {
    return db
      .into('user_balances')
      .where({ user_name })
      .first()
  },
  updateUserBalance(db, user_name, balance) {
    return db
      .into('user_balances')
      .where({user_name})
      .update({balance})
  },
  insertUserBalance(db, user) {
    const { user_name } = user
      return db
        .into('user_balances')
        .insert({ user_name })
        .returning('*')
        .then(([user]) => user)
  },
};

module.exports = BalanceService;