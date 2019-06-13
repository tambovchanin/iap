import App from './app';
import AuthController from './controllers/auth.controller';
import SongController from './controllers/song.controller';
import PLController from './controllers/playlist.controller';

const app = new App([
    new AuthController('auth'),
    new SongController('songs'),
    new PLController('playlists')
  ],
  8081
);

app.listen();
