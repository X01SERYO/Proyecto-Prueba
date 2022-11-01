import pg from 'pg';
import config from '../config';
import * as errors from './errors';

const { Pool } = pg;

let pool;

// Secret names
const pgPasswordSn = process.env.DB_PG_PASSWORD_SN || 'pgPassword';
const pgUserSn = process.env.DB_PG_USER_SN || 'pgUser';

/**
 * Returns a pool of clients
 * @returns A pool
 */
const getPool = async () => {
  if (!pool) {
    const pgPassword = config.db.pg.password; //await config.secret.getSecret(pgPasswordSn);
    const pgUser = config.db.pg.user; //await config.secret.getSecret(pgUserSn);

    pool = new Pool({
      user: pgUser,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: pgPassword,
      port: process.env.PGPORT,
    });
  }

  return pool;
};

/**
 * Executes a query
 * @param {string} sql The query to be executed
 * @param {*[]} args The arguments for the query
 * @returns {*[]} The rows returned by the query
 */
const query = async (sql, args) => {
  try {
    const pool = await getPool();
    const { rows } = await pool.query(sql, args);

    return rows;
  } catch (err) {
    errors.handle(err);
  }
};

/**
 * Calls a database function
 * @param {string} name The name of the function
 * @param {*[]} args The arguments for the function
 * @returns {Object[]} Rows returned by the function
 */
const callFunction = async (name, args) => {
  try {
    const pool = await getPool();
    const params = buildParams(args.length);
    const sql = `SELECT * FROM ${name}(${params});`;
    const { rows } = await pool.query(sql, args);

    return rows;
  } catch (err) {
    errors.handle(err);
  }
};

/**
 * Calls a procedure
 * @param {string} name The name of the procedure
 * @param {string} args The arguments for the procedure
 */
const callProcedure = async (name, args) => {
  try {
    const pool = await getPool();
    const params = buildParams(args.length);
    const sql = `CALL ${name}(${params});`;
    await pool.query(sql, args);
  } catch (err) {
    errors.handle(err);
  }
};

/**
 * Creates the params string for a parameterized query
 * @param {number} size The size of the parameters
 * @returns {string} The params string
 */
const buildParams = size => {
  let separator = '';
  let params = '';
  for (let i = 1; i <= size; i++) {
    params += `${separator}$${i}`;
    separator = ', ';
  }

  return params;
};

export { query, callFunction, callProcedure };
