import * as express from 'express';

class Route {
  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes(): void {}
}

interface ControllerInterface extends Route {
  readonly path: string;
  readonly router: express.Router;
}

export default ControllerInterface;
