const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database");

const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    seller_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    product_status_id: {
      type: DataTypes.INTEGER,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

// Generate random data

// (async () => {
//   const { default: random } = await import("random");
//   const products = [];

//   for (let i = 0; i < 10; i++) {
//     const product = {
//       seller_id: random.int(2, 5),
//       name: `Product ${i}`,
//       brand: `Brand ${i}`,
//       category_id: random.int(1, 5),
//       description: `This is a product description for product ${i}`,
//       price: parseFloat(random.float(10.0, 100.0).toFixed(2)),
//       product_status_id: random.int(1, 3),
//       image_url: `https://example.com/image${i}`,
//     };

//     products.push(product);
//   }

//   // Insert the generated data
//   await Product.bulkCreate(products);

//   console.log("Products created successfully");
// })();



module.exports = Product;
