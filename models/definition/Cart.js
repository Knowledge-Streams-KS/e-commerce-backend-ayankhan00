const { Sequelize, Model, DataTypes } = require( 'sequelize' );

let sequelize = require('../../common/dbConnection');

class Cart extends Model {}

Cart.init(
	{
		id: {
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			type: DataTypes.INTEGER(),
		},
		quantity: {
			allowNull: false,
			type: DataTypes.INTEGER(),
		},
		price: {
			allowNull: false,
			type: DataTypes.FLOAT(),
		},
		total: {
			allowNull: false,
			type: DataTypes.FLOAT(),
		},
	},
	{
		paranoid: true,
		timestamps: true,
		modelName: 'Cart',
		sequelize,
	},
);

module.exports = Cart;
