
const User = require("../api/models/user");
const Role = require("../api/models/role");
const Product = require("../api/models/product");
const ProductsCategory = require("../api/models/product_category");
const ProductsStatus = require("../api/models/product_status");
const Post = require("../api/models/post");
const Like = require("../api/models/like");


const defineRelations = () => {
  //ONE TO MANY

  User.hasMany(Product, { foreignKey: "seller_id" , onDelete:'SET NULL'});
  Product.belongsTo(User, { foreignKey: "seller_id", onDelete:'SET NULL' });

  User.hasMany(Like, { foreignKey: "user_id", onDelete:'SET NULL' });
  Like.belongsTo(User, { foreignKey: "user_id", onDelete:'SET NULL' });

  //MANY TO ONE
  Post.belongsTo(User, { foreignKey: "buyer_id", onDelete:'SET NULL' });
  User.hasMany(Post, { foreignKey: "buyer_id", onDelete:'SET NULL' });

  Product.belongsTo(ProductsStatus, { foreignKey: "product_status_id", onDelete:'SET NULL' });
  ProductsStatus.hasMany(Product, { foreignKey: "product_status_id", onDelete:'SET NULL' });

  Product.belongsTo(ProductsCategory, { foreignKey: "category_id", onDelete:'SET NULL' });
  ProductsCategory.hasMany(Product, { foreignKey: "category_id", onDelete:'SET NULL' });

  User.belongsTo(Role, { foreignKey: "role_id", onDelete:'SET NULL' });
  Role.hasMany(User, { foreignKey: "role_id", onDelete:'SET NULL' });

  //ONE TO ONE
  Post.belongsTo(Product, { foreignKey: "product_id" });
  Product.hasOne(Post, { foreignKey: "product_id" });

  console.log("Relations defined");
};

module.exports = defineRelations;
