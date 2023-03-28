const Sequelize = require('sequelize');
var config = require('../../config.json');
const db = {};
config = config.db;
let sequelize = require('../../common/dbConnection');
const User = require('../definition/User');
const  Orders  = require('../definition/Order');
const Cart = require('../definition/Cart');
const CartItems = require('../definition/CartItem');
const Products = require('../definition/Product');
const Role = require('../definition/Role');
const models = {
	User,
	Orders,
	Cart,
	Products,
	Role,
	CartItems,
};

// roles-users one to many
Role.hasMany(User, { onDelete: 'CASCADE', foreignKey: 'roleId' });
User.belongsTo(Role, { onDelete: 'CASCADE', foreignKey: 'roleId' });

// users-cart one to one
Role.hasOne(Cart, { onDelete: 'CASCADE', foreignKey: 'userId' });
Cart.belongsTo(User, { onDelete: 'CASCADE', foreignKey: 'userId' });

// Products-CartItems one to many
// Products.hasMany(CartItems, { onDelete: 'CASCADE', foreignKey: 'productId' });
// CartItems.belongsTo(Products, { onDelete: 'CASCADE', foreignKey: 'productId' });

// Cart-CartItems one to many
// Cart.hasMany(CartItems, { onDelete: 'CASCADE', foreignKey: 'cartId' });
// CartItems.belongsTo(Cart, { onDelete: 'CASCADE', foreignKey: 'cartId' });

sequelize.models = models;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db, models };
