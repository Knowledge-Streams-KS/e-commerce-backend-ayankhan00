const cartItemService = require('../../services/cartItemService');

module.exports = async function (req, res) {
	const data = await cartItemService.deleteCartItem(req.query.id);
	res.send(data);
};
