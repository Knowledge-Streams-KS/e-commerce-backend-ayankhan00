const { Sequelize, Model, INTEGER, DataTypes } = require('sequelize');

let sequelize = require('../../common/dbConnection');

class CartItems extends Model {}

CartItems.init(
	{
		id: {
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			type: DataTypes.INTEGER(),
		},
	},

	{
		paranoid: true,
		timestamps: true,
		sequelize: sequelize,
		modelName: 'CartItems',
	},
);

module.exports = CartItems;
