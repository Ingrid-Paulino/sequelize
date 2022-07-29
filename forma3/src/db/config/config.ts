import { Options } from 'sequelize';

const config: Options = {
  username: 'root',
  password: '123456',
  database: 'agenda2',
  host: '127.0.0.1',
  port: 3307,
  dialect: 'mysql',
}

export = config;