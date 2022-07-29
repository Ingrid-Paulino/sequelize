import { Model, INTEGER, STRING, DATE  } from 'sequelize';
import db from '.';
import Address from './address';


class Client extends Model {
  public id: number;
  public fullName: string;
  public email: number;
  public password: string;
}

Client.init({
  id: {
    allowNull: false,
    // autoIncrement: true,
    primaryKey: true,
    type: STRING(36),
  },
  fullName: {
    allowNull: false,
    type: STRING,
    field: 'full_name',
  },
  email: {
    allowNull: false,
    type: STRING,
  },
  password: {
    allowNull: false,
    type: STRING,
  },
}, {
  timestamps: true,
  modelName: 'Client',
  tableName: 'Clients',
  underscored: true,
  sequelize: db,
});


  // Client.associate = (models) => {
  //   Client.hasMany(models.Address,
  //     { foreignKey: 'clientId', as: 'addresses' });
  // };

  // hasOne -> possui um
// hasMany -> possui vários
// belongsTo -> pertence a um
// belongsMany -> pertence a vários

// Address.associate = (models) => {
//   Address.belongsTo(models.Client,
//     { foreignKey: 'clientId', as: 'clients' });
// };

Client.hasMany(Address, { foreignKey: 'id', as: 'addresses' });

Address.belongsTo(Client, { foreignKey: 'clientId', as: 'clients' });


export default Client;