import fastifySwagger from '@fastify/swagger';
import multipart from '@fastify/multipart';
import * as modules from './modules';
import cors from '@fastify/cors';
import Fastify from 'fastify';
import { config } from './infra';

const route = async server => {
  modules.product.controller.route(server);
};

const existProcess = () => process.exit(1);

const handleServerError = err => {
  existProcess();
};

const handleValidationError = errs => {
  const error = errs.map(e => `<${e.dataPath}> ${e.message}`).join(';');
  console.log(error);

  return error;
};

const handleNotFound = async req => {
  const error = `NOT FOUND ${req.url}`;

  return error;
};

const handleError = async (err, res) => {
  if (err instanceof SyntaxError) {
    err = `Error found: ${err.message}`;
  }

  const problem = err;
  console.log(err);

  res.status(500).send(problem);
};

const openApiConfig = () => {
  const openApiConfig = {
    swagger: {
      host: 'localhost',
      info: {
        version: '0.0.1',
        title: 'Project test',
        description: 'Proyecto de prueba',
      },
      schemas: ['http'],
      produces: ['application/json'],
    },
    exposeRoute: config.server.docs.expose,
  };

  return openApiConfig;
};

const build = () => {
  const server = Fastify({ logger: true });

  //Plugins
  server.register(multipart, { attachFieldsToBody: true });
  server.register(fastifySwagger, openApiConfig());
  server.register(route, { prefix: '/api' });
  server.register(cors, { origin: '*' });

  //Error handlers
  server.setErrorHandler(handleError);
  server.setNotFoundHandler(handleNotFound);
  server.setSchemaErrorFormatter(handleValidationError);

  return server;
};

const start = async server => {
  try {
    await server.listen(config.server.port, config.server.ip);
  } catch (err) {
    handleServerError(err);
  }
};

const configureProcess = () => {
  console.log(config.server.docs.expose);
  console.log(config.server.port);
  console.log(config.server.ip);
};

export { build, start, configureProcess };
