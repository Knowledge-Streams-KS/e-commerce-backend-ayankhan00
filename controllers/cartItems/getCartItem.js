const cartItemService = require('../../services/cartItemService');

module.exports = async function (req, res) {
    const data = await cartItemService.getCartItem( req.body );
	res.send(data);
};
