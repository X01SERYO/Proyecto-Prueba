-- CREATION FUNTIONS 

CREATE OR REPLACE FUNCTION pp.fn_create_product(code TEXT, name TEXT, buy_price DECIMAL, sell_price DECIMAL, packaging INTEGER)
    RETURNS INTEGER
AS $$
    DECLARE
        gen_id INTEGER;
    BEGIN
        INSERT INTO pp.products (code, name, buy_price, sell_price, packaging)
        VALUES(code, name, buy_price, sell_price, packaging)
        RETURNING id INTO gen_id;

        RETURN gen_id;
    END;
$$
LANGUAGE PLPGSQL;

-- FIND FUNTIONS 

CREATE OR REPLACE FUNCTION pp.fn_find_products(req_id INTEGER, req_code TEXT, req_name TEXT, req_buy_price DECIMAL, 
req_sell_price DECIMAL, req_packaging INTEGER)
    RETURNS SETOF pp.products 
AS $$
    SELECT *
    FROM pp.products AS P
    WHERE P.id = COALESCE(req_id, P.id)
    AND P.code = COALESCE(req_code, P.code)
    AND P.name = COALESCE(req_name, P.name)
    AND P.buy_price = COALESCE(req_buy_price, P.buy_price)
    AND P.sell_price = COALESCE(req_sell_price, P.sell_price)
    AND P.packaging = COALESCE(req_packaging, P.packaging)
    AND P.deleted = FALSE;
$$
LANGUAGE SQL;

-- UPDATE PROCEDURES 

CREATE OR REPLACE PROCEDURE pp.pr_update_product(req_id INTEGER, req_code TEXT, req_name TEXT, req_buy_price DECIMAL, 
req_sell_price DECIMAL, req_packaging INTEGER, req_deleted BOOLEAN)
AS $$
    BEGIN
        UPDATE pp.products
        SET code = COALESCE(req_code, code), 
            name = COALESCE(req_name, name),
            buy_price = COALESCE(req_buy_price, buy_price),
            sell_price = COALESCE(req_sell_price, sell_price),
            packaging = COALESCE(req_packaging, packaging),
            deleted = COALESCE(req_deleted, deleted)
        WHERE id = req_id;

        IF NOT FOUND THEN
            RAISE EXCEPTION 'Product with id = % was not found', req_id;
        END IF;
    END;
$$
LANGUAGE PLPGSQL;
