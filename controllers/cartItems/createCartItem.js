const cartItemService = require('../../services/cartItemService');

module.exports = async function ( req, res ) {
    const data = await cartItemService.createCartItem(req.body);
    res.send( data );
}