import * as express from 'express';
import SongInterface from './song.interface';
import ControllerInterface from '../interfaces/controller';

class SongController implements ControllerInterface {
  path: string = '';
  router: express.Router = express.Router();

  private posts: SongInterface[] = [
    {
      cover: 'https://ia800402.us.archive.org/13/items/Swaraj-Gandhi-1947-10-05/1947-10-05.jpg',
      title: 'Post Prayer Speech of 1947-10-05 (Part 1)',
      file: 'https://archive.org/download/Swaraj-Gandhi-1947-10-05/prayer_speech_47.ogg'
    },
    {
      cover: 'https://ia800402.us.archive.org/13/items/Swaraj-Gandhi-1947-10-05/1947-10-05.jpg',
      title: 'Post Prayer Speech of 1947-10-05 (Part 2)',
      file: 'https://archive.org/download/Swaraj-Gandhi-1947-10-05/prayer_speech_54.ogg'
    },
    {
      title: 'Speech About Sachcha Swaraj',
      file: 'https://archive.org/download/HindSwaraj-Speech-01-13/disk01/track_13.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '00 - Note, Forward and Reply to Critics',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_00_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '00 - Note, Forward and Reply to Critics',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_00_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '01 - Chapter I: The Congress and Its Officials',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_01_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '02 - Chapter II: The Partition of Bengal',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_02_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '03 - Chapter III: Discontent and Unrest',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_03_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '04 - Chapter IV: What is Swaraj?',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_04_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '05 - Chapter V: The Condition of England',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_05_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '06 - Chapter VI: Civilization',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_06_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '07 - Chapter VII: Why was India Lost?',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_07_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '08 - Chapter VIII: The Condition of India',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_08_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '09 - Chapter IX: The Condition of India (Continued) - Railways',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_09_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '10 - Chapter X: The Condition of India (Continued) - The Hindus and the Mahomedans',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_10_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '11 - Chapter XI: The Condition of India (Continued) - Lawyers',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_11_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '12 - Chapter XII: The Condition of India (Continued) - Doctors',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_12_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '13 - Chapter XIII: What is True Civilization?',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_13_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '14 - Chapter XIV: How Can India Become Free?',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_14_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '15 - Chapter XV: Italy and India',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_15_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '16 - Chapter XVI: Brute-Force',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_16_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '17 - Chapter XVII: Passive Resistance',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_17_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '18 - Chapter XVIII: Education',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_18_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '19 - Chapter XIX: Machinery',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_19_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '20 - Chapter XX: Conclusion',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_20_gandhi.ogg'
    },
    {
      cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
      title: '21 - Appendices',
      file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_21_gandhi.ogg'
    }
  ];

  constructor(path: string) {
    this.path = `/${path}`;
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createPost);
  }

  getAllPosts = (request: express.Request, response: express.Response) => {
    response.send(this.posts);
  }

  createPost = (request: express.Request, response: express.Response) => {
    const post: SongInterface = request.body;
    this.posts.push(post);
    response.send(post);
  }
}

export default SongController;
