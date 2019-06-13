import config from '../config/config';
import { createModels, UserAttributes } from './models';
// import { UserAttributes } from './models/user';


const db = createModels(config.database);

async function initialize() {
  await db.sequelize.sync();
  await db.user.findOrCreate({where: {name: 'admin'}, defaults: { password: UserAttributes.generateHash('iaplayer') }});

  // let list = await db.playlist.findByPk(1);
  //
  // console.log('* list', await list.createSong(
  //     {
  //           cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //           name: '01 - Chapter I: The Congress and Its Officials',
  //           file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_01_gandhi.ogg'
  //   }
  // ));

  // await list.createSong([
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '00 - Note, Forward and Reply to Critics',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_00_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '01 - Chapter I: The Congress and Its Officials',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_01_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '02 - Chapter II: The Partition of Bengal',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_02_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '03 - Chapter III: Discontent and Unrest',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_03_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '04 - Chapter IV: What is Swaraj?',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_04_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '05 - Chapter V: The Condition of England',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_05_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '06 - Chapter VI: Civilization',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_06_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '07 - Chapter VII: Why was India Lost?',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_07_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '08 - Chapter VIII: The Condition of India',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_08_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '09 - Chapter IX: The Condition of India (Continued) - Railways',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_09_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '10 - Chapter X: The Condition of India (Continued) - The Hindus and the Mahomedans',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_10_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '11 - Chapter XI: The Condition of India (Continued) - Lawyers',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_11_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '12 - Chapter XII: The Condition of India (Continued) - Doctors',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_12_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '13 - Chapter XIII: What is True Civilization?',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_13_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '14 - Chapter XIV: How Can India Become Free?',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_14_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '15 - Chapter XV: Italy and India',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_15_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '16 - Chapter XVI: Brute-Force',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_16_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '17 - Chapter XVII: Passive Resistance',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_17_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '18 - Chapter XVIII: Education',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_18_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '19 - Chapter XIX: Machinery',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_19_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '20 - Chapter XX: Conclusion',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_20_gandhi.ogg'
  //   },
  //   {
  //     cover: 'https://ia801303.us.archive.org/2/items/indianhomerule_1511_librivox/hindswaraj_1511.jpg',
  //     name: '21 - Appendices',
  //     file: 'https://archive.org/download/indianhomerule_1511_librivox/indianhomerule_21_gandhi.ogg'
  //   }
  // ]);

  return await db.user.findAll().then((users: UserAttributes[]) => users);
}

(async () => {
  await initialize();

  console.log('* Done!');
})();
