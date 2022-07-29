import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';

class Address extends Model {
  public id: number;
  public cep: string;
  public number: number;
  public complement: string;
  public clientId: number;
  public createdAt: string;
  public updatedAt: string;
}

Address.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: STRING(36),
  },
  cep: {
    allowNull: false,
    type: STRING(9),
  },
  number: {
    allowNull: false,
    type: INTEGER,
  },
  complement: {
    allowNull: false,
    type: STRING,
  },
  clientId: {
    allowNull: true,
    type: STRING,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    field: 'client_id',
    references: {
      model: 'Clients',
      key: 'id',
    },
  },
  createdAt: {
    allowNull: false,
    type: DATE(3),
    field: 'created_at',
  },
  updatedAt: {
    allowNull: false,
    type: DATE(3),
    field: 'updated_at',
  },
},
  {
    sequelize: db,
    tableName: 'Addresses',
    modelName: 'Address',
    timestamps: true,
    underscored: true,
  });

export default Address;
