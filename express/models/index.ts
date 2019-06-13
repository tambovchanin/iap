import { Sequelize } from 'sequelize';
import { initUser, UserAttributes } from './user';
import { initSong, SongAttributes } from './songs';
import { initPlaylist, PlaylistAttributes } from './playlist';

export const createModels = (sequelizeConfig: { dialect: string, storage: string }): any => {
  const sequelize: Sequelize = new Sequelize(sequelizeConfig as {});

  initSong(sequelize);
  initUser(sequelize);
  initPlaylist(sequelize);

  SongAttributes.belongsToMany(PlaylistAttributes, {through: 'PlaylistSong', as: 'Playlists' });
  PlaylistAttributes.belongsToMany(SongAttributes, {through: 'PlaylistSong', as: 'Songs' });

  return {
    sequelize,
    song: SongAttributes,
    user: UserAttributes,
    playlist: PlaylistAttributes
  };
};

export { UserAttributes, SongAttributes, PlaylistAttributes };
