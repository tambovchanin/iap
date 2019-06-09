import * as bcrypt from 'bcrypt';
import { Sequelize, Model, DataTypes } from 'sequelize';

export class UserAttributes extends Model {
  static generateHash(password: string): string {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  }

  id!: number;
  name!: string;
  password!: string;

  // timestamps!
  readonly createdAt!: Date;
  readonly updatedAt!: Date;

  validatePassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}

export const initUser = (sequelize: Sequelize): void => {
  UserAttributes.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false
    }

  }, {
    tableName: 'users',
    sequelize
  });
};

export default { UserAttributes, initUser };
