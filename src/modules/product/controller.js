import * as create from './create';
import * as find from './find';

/**
 * Handles the create product
 * @param {Request} req The request
 * @returns {Object} The product id
 */
const handleCreate = async req => {
  const cmd = new create.Command(req.body);
  const productId = await create.handle(cmd);

  return { productId };
};

/**
 * Handles the find product
 * @param {Request} req The request
 * @returns {Object} The product id
 */
const handleFind = async req => {
  const query = new find.Query(req.query);
  const products = await find.handle(query);

  return products;
};

/**
 * Routes request to handlers
 * @param {Fastify} server The server
 */
const route = server => {
  server.post('/product.create', { schema: create.schema }, handleCreate);
  server.get('/product.find', { schema: find.schema }, handleFind);
};

export { route };
