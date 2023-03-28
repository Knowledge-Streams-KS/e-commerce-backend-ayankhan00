const { Sequelize, Model, DataTypes } = require('sequelize');

let sequelize = require('../../common/dbConnection');

class Products extends Model {}

Products.init(
	{
		id: {
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
			type: DataTypes.INTEGER(),
		},
		title: {
			allowNull: false,
			type: DataTypes.STRING(),
		},
		category: {
			allowNull: false,
			type: DataTypes.STRING(),
		},
		description: {
			allowNull: true,
			type: DataTypes.STRING(1000),
		},
		price: {
			allowNull: false,
			type: DataTypes.FLOAT(),
		},
		image: {
			allowNull: false,
			type: DataTypes.STRING(),
		},
		rating: {
			type: DataTypes.JSON,
			rate: {
				type: DataTypes.FLOAT,
			},
			count: {
				type: DataTypes.INTEGER,
			},
		},
	},
	{
		paranoid: true,
		timestamps: true,
		modelName: 'Products',
		sequelize,
	},
);

module.exports = Products;
