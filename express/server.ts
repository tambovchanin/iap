import App from './app';
import AuthController from './controllers/auth.controller';
import PostsController from './controllers/post.controller';
import PLController from './controllers/playlist.controller';

const app = new App([
    new AuthController('auth'),
    new PostsController('posts'),
    new PLController('playlists')
  ],
  8081
);

app.listen();
