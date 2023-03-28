const productService = require('../../services/productService');

module.exports = async function (req, res) {
	const data = await productService.getCategory();
	res.send(data);
};
