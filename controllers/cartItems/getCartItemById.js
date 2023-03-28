const cartItemService = require('../../services/cartItemService');

module.exports = async function (req, res) {
	const data = await cartItemService.getCartItemById(req.query.id);
	res.send(data);
};
