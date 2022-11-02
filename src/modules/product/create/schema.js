const schema = {
  body: {
    type: 'object',
    required: ['code', 'name', 'buyPrice', 'sellPrice', 'packaging'],
    properties: {
      code: { type: 'string' },
      name: { type: 'string' },
      buyPrice: { type: 'number' },
      sellPrice: { type: 'number' },
      packaging: { type: 'integer' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        productId: { type: 'integer' },
      },
    },
  },
  tags: ['product'],
};

export { schema };
