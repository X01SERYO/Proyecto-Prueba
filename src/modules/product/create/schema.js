const schema = {
  body: {
    type: 'object',
    required: ['name', 'buyPrice', 'sellPrice', 'packaging'],
    properties: {
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
