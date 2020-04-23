import express from 'express';
import cors from 'cors';

import routes from './router';

class App {
  constructor() {
    this.server = express();
    this.midleware();
    this.routes();
  }

  midleware() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
