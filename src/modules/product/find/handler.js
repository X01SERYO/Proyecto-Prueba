import * as store from './store';

/**
 * Handles a find product query
 * @param {Query} query The query
 * @returns {ProductModel[]} The products
 */
const handle = async query => {
  const products = await store.findProduct(query);

  return products;
};

export { handle };
