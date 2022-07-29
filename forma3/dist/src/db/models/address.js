"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Address extends sequelize_1.Model {
}
Address.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: (0, sequelize_1.STRING)(36),
    },
    cep: {
        allowNull: false,
        type: (0, sequelize_1.STRING)(9),
    },
    number: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    complement: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    clientId: {
        allowNull: true,
        type: sequelize_1.STRING,
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
        type: (0, sequelize_1.DATE)(3),
        field: 'created_at',
    },
    updatedAt: {
        allowNull: false,
        type: (0, sequelize_1.DATE)(3),
        field: 'updated_at',
    },
}, {
    sequelize: _1.default,
    tableName: 'Addresses',
    modelName: 'Address',
    timestamps: true,
    underscored: true,
});
exports.default = Address;
