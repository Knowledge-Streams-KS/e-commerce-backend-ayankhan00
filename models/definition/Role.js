const { Sequelize, Model, INTEGER, DataTypes } = require('sequelize');

let sequelize = require('../../common/dbConnection');

class Role extends Model {}

Role.init(
	{
		id: {
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			type: DataTypes.INTEGER(),
		},

		role: {
			allowNull: false,
			unique: true,
			type: DataTypes.STRING(),
		},
	},
	{
		paranoid: true,
		timestamps: true,
		sequelize: sequelize,
		modelName: 'Role',
	},
);

module.exports = Role;
