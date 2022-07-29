"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const address_1 = __importDefault(require("./address"));
class Client extends sequelize_1.Model {
}
Client.init({
    id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: (0, sequelize_1.STRING)(36),
    },
    fullName: {
        allowNull: false,
        type: sequelize_1.STRING,
        field: 'full_name',
    },
    email: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    password: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
}, {
    timestamps: true,
    modelName: 'Client',
    tableName: 'Clients',
    underscored: true,
    sequelize: _1.default,
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
Client.hasMany(address_1.default, { foreignKey: 'id', as: 'addresses' });
address_1.default.belongsTo(Client, { foreignKey: 'clientId', as: 'clients' });
exports.default = Client;
