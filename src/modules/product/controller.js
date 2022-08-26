import * as create from './create';

const handleCreate = async req => {
  const cmd = new create.Command(req.body);
  const productId = await create.handler(cmd);

  return { productId };
};

const route = server => {
  server.post('/product.create', { schema: create.schema }, handleCreate);
};

export { route };
