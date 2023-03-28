const { models } = require('../models/definition');

module.exports = {
	createProduct: async function (body) {
		const result = await models.Products.create(body);
		return result;
	},
	createProductBulk: async function (body) {
		const result = await models.Products.bulkCreate(body.products);
		return result;
	},
	getProduct: async function () {
		const result = await models.Products.findAll();
		return result;
	},
	getCategory: async function () {
		let result = await models.Products.findAll();
		const uniqueCategory = [...new Set(result.map((obj) => obj.category))];
		return uniqueCategory;
	},
	getProductById: async function (ids) {
		const result = await models.Products.findOne({
			where: { id: ids },
		});
		return result;
	},
	getProductByCategory: async function (cat) {
		let result = await models.Products.findAll({
			where: { category: cat },
		});
		return result;
	},
	updateProduct: async function (body) {
		const result = await models.Products.update(
			{
				...body,
			},
			{
				where: { id: body.id },
			},
		);
		return result;
	},
	deleteProduct: async function (ids) {
		const result = await models.Products.destroy({
			where: { id: ids },
		});
		return 'Product Deleted ';
	},
};
