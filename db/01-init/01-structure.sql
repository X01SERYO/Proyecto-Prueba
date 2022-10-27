-- SCHEMAS
CREATE SCHEMA pp;

--TABLES
CREATE TABLE pp.products(
    id SERIAL,
    nane TEXT NOT NULL,
    buy_price DECIMAL NOT NULL,
    sell_price DECIMAL NOT NULL,
    packaging INTEGER NOT NULL
);