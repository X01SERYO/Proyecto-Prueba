import * as store from './store';

/**
 * Handles a create product command
 * @param {Command} cmd The command
 * @returns {Number} The product id
 */
const handle = async cmd => {
  const productId = await store.createProduct(cmd);

  return productId;
};

export { handle };
