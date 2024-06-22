const Product = require("../models/product");

async function getAllProducts(req, res) {
  try {
    const products = await Product.findAll({ paranoid: false });
    if (products) {
      return res.status(200).json(products);
    } else {
      return res.status(404).send("No products found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneProduct(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createProduct(req, res) {
  try {
    const product = await Product.create({
      seller_id: req.body.seller_id,
      name: req.body.name,
      brand: req.body.brand,
      category_id: req.body.category_id,
      description: req.body.description,
      price: req.body.price,
      product_status_id: req.body.product_status_id,
      image_url: req.body.image_url
    });
    return res
      .status(200)
      .json({ message: "Product created", product: product });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateProduct(req, res) {
  try {
    const [productExist, product] = await Product.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (productExist !== 0) {
      return res
        .status(200)
        .json({ message: "Product updated", product: product });
    } else {
      return res.status(404).send("Product not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteProduct(req, res) {
  try {
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (product) {
      return res.status(200).json("Product deleted");
    } else {
      return res.status(404).send("Product not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
