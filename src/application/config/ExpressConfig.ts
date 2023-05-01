import express, { Express } from 'express';

import routes from '../routes';

export class ExpressConfig {
  private app: Express;

  constructor() {
    this.app = express();
  }

  init() {
    this.setMiddleware();
    this.setRouters();

    return this.app;
  }

  private setMiddleware() {
    this.app.use(express.json());
  }

  private setRouters() {
    this.app.use('/api/', routes);
  }
}
