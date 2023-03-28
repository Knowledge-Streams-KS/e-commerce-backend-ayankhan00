const productService = require('../../services/productService');

module.exports = async function (req, res) {
    const data = await productService.getProduct();
	res.send(data);
};
