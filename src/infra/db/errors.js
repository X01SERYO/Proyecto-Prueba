import errors from '../../errors';

const DATABASE_ERROR_TITLE = 'A database error was detected';

/**
 * Handles a database error
 * @param {Error} err The error to be handled
 */
const handle = err => {
  const appError = new errors.AppError(
    errors.ErrorType.InternalServerError,
    DATABASE_ERROR_TITLE,
    err.message,
    true
  );
  throw appError;
};

export { handle };
