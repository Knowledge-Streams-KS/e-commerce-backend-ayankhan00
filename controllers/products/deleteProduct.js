const productService = require('../../services/productService');

module.exports = async function (req, res) {
	const data = await productService.deleteProduct(req.query.id);
	res.send(data);
};
