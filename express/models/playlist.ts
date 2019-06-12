import * as bcrypt from 'bcrypt';
import { Sequelize, Model, DataTypes } from 'sequelize';

export class PlaylistAttributes extends Model {
  id!: number;
  name!: string;
  default?: boolean;

  // timestamps!
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

export const initPlaylist = (sequelize: Sequelize): void => {
  PlaylistAttributes.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    default: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }

  }, {
    tableName: 'playlists',
    sequelize
  });
};

export default { PlaylistAttributes, initPlaylist };
