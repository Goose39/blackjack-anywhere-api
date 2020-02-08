CREATE TABLE user_balances (
  user_name TEXT NOT NULL PRIMARY KEY REFERENCES blackjack_users(user_name),
  balance real NOT NULL
);