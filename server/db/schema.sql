BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS cookbooks (
  id integer PRIMARY KEY AUTOINCREMENT,
  name string
);

CREATE TABLE IF NOT EXISTS dishes (
  id integer PRIMARY KEY AUTOINCREMENT,
  cookbooks_id integer NOT NULL,
  name string,
  CONSTRAINT fk_cookbooks_id
    FOREIGN KEY (cookbooks_id) REFERENCES cookbooks (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS recipes (
  id integer PRIMARY KEY AUTOINCREMENT,
  dishes_id integer NOT NULL,
  name string,
  CONSTRAINT fk_dishes_id
    FOREIGN KEY (dishes_id) REFERENCES dishes (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS ingredients (
  id integer PRIMARY KEY AUTOINCREMENT,
  name string
);

CREATE TABLE IF NOT EXISTS recipe_ingredients (
  id integer PRIMARY KEY AUTOINCREMENT,
  recipes_id integer NOT NULL,
  ingredients_id integer NOT NULL,
  quantity float,
  CONSTRAINT fk_recipes_id
    FOREIGN KEY (recipes_id) REFERENCES recipes (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT fk_ingredients_id
    FOREIGN KEY (ingredients_id) REFERENCES ingredients (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

COMMIT TRANSACTION;
