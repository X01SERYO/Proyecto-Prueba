import { db } from '../../../infra';

/**
 * Creates a product
 * @param {Command} cmd The command
 * @returns {Number} The product id
 */
const createProduct = async cmd => {
  const name = 'pp.fn_create_product';
  const args = Object.values(cmd);
  const [row] = await db.callFunction(name, args);
  console.log(row);

  return row.fn_create_product;
};

export { createProduct };
