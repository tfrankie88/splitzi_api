DROP TABLE IF EXISTS menus;
DROP TABLE IF EXISTS restaurants;

CREATE TABLE IF NOT EXISTS restaurants
(id BIGSERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
restaurant_name VARCHAR(255),
country VARCHAR(255),
postal INTEGER,
access BOOLEAN
);

CREATE TABLE IF NOT EXISTS menus
(id BIGSERIAL PRIMARY KEY,
item VARCHAR(255) NOT NULL,
price MONEY NOT NULL,
restaurant_id INTEGER REFERENCES restaurants(id)
);
