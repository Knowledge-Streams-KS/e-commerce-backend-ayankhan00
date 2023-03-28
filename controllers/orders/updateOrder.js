const orderService = require('../../services/orderService');

module.exports = async function (req, res) {
	const data = await orderService.updateOrder(req.body);
	res.send(data);
};
