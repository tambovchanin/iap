import express, { Request, Response } from 'express';
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

  get = (request: Request, response: Response) => {
    PlaylistAttributes.findByPk(request.query.id, {
      include: [PlaylistAttributes.associations.Songs]
    }).then(response.json.bind(response));
  }

  all = (request: Request, response: Response) => {
    PlaylistAttributes.findAll()
      .then(response.json.bind(response));
  }

  create = (request: Request, response: Response) => {
    PlaylistAttributes.create(request.body.data)
      .then(response.json.bind(response));
  }
}

export default PostsController;
