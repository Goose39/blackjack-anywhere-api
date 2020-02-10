BEGIN;

TRUNCATE
  user_balances,
  blackjack_users
  RESTART IDENTITY CASCADE;

INSERT INTO blackjack_users (user_name, full_name, nickname, password)
VALUES
  ('guest', 'guest', 'Guest', '$2a$12$lHK6LVpc15/ZROZcKU00QeiD.RyYq5dVlV/9m4kKYbGibkRc5l4Ne'),
  ('Goose', 'Shaun Gouws', 'Goose', '$2a$12$VQ5HgWm34QQK2rJyLc0lmu59cy2jcZiV6U1.bE8rBBnC9VxDf/YQO');

INSERT INTO user_balances (user_name, balance)
VALUES
  ('guest', 500),
  ('Goose', 1000);

COMMIT;
