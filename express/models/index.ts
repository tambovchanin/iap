import { Sequelize } from 'sequelize';
import { initUser, UserAttributes } from './user';
import { initPlaylist, PlaylistAttributes } from './playlist';

export const createModels = (sequelizeConfig: { dialect: string, storage: string }): any => {
  const sequelize: Sequelize = new Sequelize(sequelizeConfig as {});

  initUser(sequelize);
  initPlaylist(sequelize);

  return {
    sequelize,
    user: UserAttributes,
    playlist: PlaylistAttributes
  };
};
