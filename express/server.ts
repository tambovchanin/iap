import App from './app';
import PostsController from './controllers/post.controller';
import AuthController from './controllers/auth.controller';

const app = new App([
    new AuthController('auth'),
    new PostsController('posts')
  ],
  8081
);

app.listen();
