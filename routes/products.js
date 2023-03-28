var express = require('express');
var router = express.Router();

const {
	createProduct,
	createProductBulk,
	getProduct,
	getCategory,
	getProductById,
	updateProduct,
	deleteProduct,
	getProductByCategory,
} = require('../controllers/index');

router.post('/createProduct', createProduct);
router.post('/createProductBulk', createProductBulk);
router.get('/getProduct', getProduct);
router.get('/getCategory', getCategory);
router.get('/getProductById', getProductById);
router.get('/getProductByCategory', getProductByCategory);
router.put('/updateProduct', updateProduct);
router.delete('/deleteProduct', deleteProduct);

module.exports = router;
