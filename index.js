const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
server.use(middlewares);
// Add this before server.use(router)
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
    '/:resource/:id': '/:resource/:id',
    '/todo/:id': '/todos/:id',
    '/todo/': '/todos/',
  })
);

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
