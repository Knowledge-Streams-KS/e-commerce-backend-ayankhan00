const cartItemService = require('../../services/cartItemService');

module.exports = async function (req, res) {
	const data = await cartItemService.updateCartItem(req.body);
	res.send(data);
};
