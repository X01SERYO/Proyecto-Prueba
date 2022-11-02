import { ProductModel } from './product_model';
import { db } from '../../../infra';

/**
 * Gets products
 * @param {Query} query The query
 * @returns {ProductModel[]} The products 
 */
const findProduct = async query => {
  const name = 'pp.fn_find_products';
  const args = Object.values(query);
  const rows = await db.callFunction(name, args);

  const products = rows.map(row => new ProductModel(row));

  return products;
};

export { findProduct };
