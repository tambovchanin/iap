import config from '../config/config';
import { createModels } from './models';
import { UserAttributes } from './models/user';

const db = createModels(config.database);

async function initialize() {
  await db.sequelize.sync();
  await db.user.findOrCreate({where: {name: 'admin'}, defaults: { password: UserAttributes.generateHash('iaplayer') }});
  return await db.user.findAll().then((users: UserAttributes[]) => users);
}

(async () => {
  await initialize();

  console.log('* Done!');
})();
