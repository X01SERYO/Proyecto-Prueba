-- SCHEMAS
CREATE SCHEMA pp;

--TABLES
CREATE TABLE pp.products(
    id SERIAL,
    code TEXT NOT NULL, 
    name TEXT NOT NULL,
    buy_price DECIMAL NOT NULL,
    sell_price DECIMAL NOT NULL,
    packaging INTEGER NOT NULL,
    deleted BOOLEAN NOT NULL DEFAULT FALSE
);