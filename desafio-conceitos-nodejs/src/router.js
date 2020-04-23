import { Router } from 'express';

const routes = new Router();

const repositories = [];

routes.get('/repositories', (request, response) => {
  // TODO
});

routes.post('/repositories', (request, response) => {
  // TODO
});

routes.put('/repositories/:id', (request, response) => {
  // TODO
});

routes.delete('/repositories/:id', (request, response) => {
  // TODO
});

routes.post('/repositories/:id/like', (request, response) => {
  // TODO
});

export default routes;
