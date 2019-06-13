import { Sequelize, Model, DataTypes } from 'sequelize';

export class SongAttributes extends Model {
  id!: number;
  name!: string;
  cover?: string;
  file!: string;

  // timestamps!
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

export const initSong = (sequelize: Sequelize): void => {
  SongAttributes.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(512),
      allowNull: false
    },
    cover: DataTypes.STRING(1024),
    file: {
      type: DataTypes.STRING(1024),
      allowNull: false
    }

  }, {
    tableName: 'songs',
    sequelize
  });
};

export default { SongAttributes, initSong };
