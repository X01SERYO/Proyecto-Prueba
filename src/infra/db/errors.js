const DATABASE_ERROR_TITLE = 'A database error was detected';

/**
 * Handles a database error
 * @param {Error} err The error to be handled
 */
const handle = err => {
  throw err;
};

export { handle };
