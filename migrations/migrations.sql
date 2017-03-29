DROP TABLE IF EXISTS restaurant;
DROP TABLE IF EXISTS menu;

CREATE TABLE IF NOT EXISTS restaurants
(id BIGSERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
email VARCHAR(255),
password VARCHAR(255),
restaurant_name VARCHAR(255),
country VARCHAR(255),
postal INTEGER,
access BOOLEAN
);

CREATE TABLE IF NOT EXISTS menu
(id BIGSERIAL PRIMARY KEY,
item VARCHAR(255),
price VARCHAR(255),
restaurant_id INTEGER REFERENCES restaurants(id)
);
