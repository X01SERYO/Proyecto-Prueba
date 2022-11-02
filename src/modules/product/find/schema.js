const schema = {
  query: {
    type: 'object',
    required: ['deleted', 'page', 'size'],
    properties: {
      id: { type: 'integer' },
      code: { type: 'string' },
      name: { type: 'string' },
      buyPrice: { type: 'number' },
      sellPrice: { type: 'number' },
      packaging: { type: 'integer' },
      deleted: { type: 'boolean' },
      page: { type: 'integer' },
      size: { type: 'integer' },
    },
  },
  response: {
    200: {
      descriptions: 'Products list',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          code: { type: 'string' },
          name: { type: 'string' },
          buyPrice: { type: 'number' },
          sellPrice: { type: 'number' },
          packaging: { type: 'integer' },
        },
      },
    },
  },
  tags: ['product'],
};

export { schema };
