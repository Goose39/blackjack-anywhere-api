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
      .where(user_name)
      .update(balance)
  },
}

module.exports = BalanceService