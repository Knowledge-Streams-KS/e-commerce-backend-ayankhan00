module.exports = {
	// User's Working
	createUser: require('./users/createUser'),
	getUser: require('./users/getUser'),
	getUserById: require('./users/getUserById'),
	updateUser: require('./users/updateUser'),
	deleteUser: require('./users/deleteUser'),

	// Role's Working
	createRole: require('./roles/createRole'),
	getRole: require('./roles/getRole'),
	getRoleById: require('./roles/getRoleById'),
	updateRole: require('./roles/updateRole'),
	deleteRole: require('./roles/deleteRole'),

	//Product's Working
	createProduct: require('./products/createProduct'),
	createProductBulk: require('./products/createProductBulk'),
	getProduct: require('./products/getProduct'),
	getCategory: require('./products/getCategory'),
	getProductById: require('./products/getProductById'),
	getProductByCategory: require('./products/getProductByCategory'),
	updateProduct: require('./products/updateProduct'),
	deleteProduct: require('./products/deleteProduct'),

	//Common Working
	login: require('./common/authentication'),
};
