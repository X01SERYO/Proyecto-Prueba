import * as store from './store';

const handler = async cmd => {
  const productId = await store.createProduct(cmd);

  return productId;
};

export { handler };
