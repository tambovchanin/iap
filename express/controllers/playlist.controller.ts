import * as express from 'express';
import { PlaylistAttributes } from '../models/playlist';
// import PlaylistInterface from './playlist.interface';
import ControllerInterface from '../interfaces/controller';

class PostsController implements ControllerInterface {
  path: string = '';
  router: express.Router = express.Router();

  constructor(path: string) {
    this.path = `/${path}`;
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get(this.path, this.get);
    this.router.get(`${this.path}/all`, this.all);
    this.router.post(this.path, this.create);
  }

  get = (request: express.Request, response: express.Response) => {
    PlaylistAttributes.findByPk(request.query.id)
      .then(response.json.bind(response));
      // .catch(response.status(500).json.bind(response));
  }

  all = (request: express.Request, response: express.Response) => {
    PlaylistAttributes.findAll()
      .then(response.json.bind(response));
  }

  create = (request: express. Request, response: express.Response) => {
    PlaylistAttributes.create(request.body)
      .then(response.json.bind(response));
  }
}

export default PostsController;
