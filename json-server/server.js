/* eslint-disable no-undef */
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'mock-data.json'));
const middlewares = jsonServer.defaults();

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1'
  })
);

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});
