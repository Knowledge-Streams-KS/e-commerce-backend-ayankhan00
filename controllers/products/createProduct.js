const productService = require('../../services/productService');

module.exports = async function ( req, res ) {
    const data = await productService.createProduct(req.body);
    res.send( data );
}