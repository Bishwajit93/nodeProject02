CREATE TABLE restaurants (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >=1 and price_range <=5)
);

DROP TABLE restaurants;

INSERT INTO restaurants(name, location, price_range) values ('mcDonalds', 'Newyork', 3);

SELECT * from restaurants;

SELECT name, price_range from restaurants;