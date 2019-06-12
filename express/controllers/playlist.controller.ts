import * as express from 'express';
import { PlaylistAttributes } from '../models/playlist';
import PlaylistInterface from './playlist.interface';
import ControllerInterface from '../interfaces/controller';

class PostsController implements ControllerInterface {
  path: string = '';
  router: express.Router = express.Router();

  constructor(path: string) {
    this.path = `/${path}`;
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get(this.path, this.playlists);
    this.router.post(this.path, this.createList);
  }

  playlists = (request: express.Request, response: express.Response) => {
    PlaylistAttributes.findAll().then((playlists: PlaylistAttributes[]) => {
      response.json(playlists);
    });
  }

  createList = (request: express.Request, response: express.Response) => {
    const pl: PlaylistInterface = request.body;

    PlaylistAttributes.create(pl).then((playlist: PlaylistAttributes) => {
      response.json(playlist);
    });
  }
}

export default PostsController;
