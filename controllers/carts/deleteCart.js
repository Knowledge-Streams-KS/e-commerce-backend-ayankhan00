const cartService = require('../../service/cartService');

module.exports = async function (req, res) {
	const data = await cartService.deleteCart(req.query.id);
	res.send(data);
};
