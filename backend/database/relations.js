
const User = require("../api/models/user");
const Role = require("../api/models/role");
const Product = require("../api/models/product");
const ProductsCategory = require("../api/models/product_category");
const ProductsStatus = require("../api/models/product_status");
const Post = require("../api/models/post");
const Like = require("../api/models/like");


const defineRelations = () => {
  //ONE TO MANY

  User.hasMany(Product, { foreignKey: "seller_id" });
  Product.belongsTo(User, { foreignKey: "seller_id" });

  User.hasMany(Like, { foreignKey: "user_id" });
  Like.belongsTo(User, { foreignKey: "user_id" });

  //MANY TO ONE
  Post.belongsTo(User, { foreignKey: "buyer_id" });
  User.hasMany(Post, { foreignKey: "buyer_id" });

  Product.belongsTo(ProductsStatus, { foreignKey: "product_status_id" });
  ProductsStatus.hasMany(Product, { foreignKey: "product_status_id" });

  Product.belongsTo(ProductsCategory, { foreignKey: "category_id" });
  ProductsCategory.hasMany(Product, { foreignKey: "category_id" });

  User.belongsTo(Role, { foreignKey: "role_id" });
  Role.hasMany(User, { foreignKey: "role_id" });

  //ONE TO ONE
  Post.belongsTo(Product, { foreignKey: "product_id" });
  Product.hasOne(Post, { foreignKey: "product_id" });

  console.log("Relations defined");
};

module.exports = defineRelations;
