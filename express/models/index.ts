import { Sequelize } from 'sequelize';
import { initUser, UserAttributes } from './user';

export const createModels = (sequelizeConfig: { dialect: string, storage: string }): any => {
  const sequelize: Sequelize = new Sequelize(sequelizeConfig as {});

  initUser(sequelize);

  return {
    sequelize,
    user: UserAttributes
  };
};
