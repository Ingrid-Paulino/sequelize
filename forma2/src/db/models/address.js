module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: {
      allowNull: false,
      // autoIncrement: true,
      primaryKey: true,
      type: DataTypes.STRING(36),
    },
    cep: {
      allowNull: false,
      type: DataTypes.STRING(9),
    },
    number: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    complement: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    clientId: {
      allowNull: true,
      type: DataTypes.STRING,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'client_id',
      foreignKey: true,
      references: {
        model: 'Clients',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE(3),
      field: 'created_at',
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE(3),
      field: 'updated_at',
    },
    },
    {
      timestamps: true,
      tableName: 'Addresses',
      underscored: true,
    });

  // hasOne -> possui um
  // hasMany -> possui vários
  // belongsTo -> pertence a um
  // belongsMany -> pertence a vários

  Address.associate = (models) => {
    Address.belongsTo(models.Client,
      { foreignKey: 'clientId', as: 'clients' });
  };

  return Address;
};
