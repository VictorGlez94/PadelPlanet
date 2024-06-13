const ProductCategory = require("../models/product_category");

async function getAllProductCategories(req, res) {
  try {
    const productCategories = await ProductCategory.findAll({
      paranoid: false,
    });
    if (productCategories) {
      return res.status(200).json(productCategories);
    } else {
      return res.status(404).send("No product categories found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneProductCategory(req, res) {
  try {
    const productCategory = await ProductCategory.findByPk(req.params.id);
    if (productCategory) {
      return res.status(200).json(productCategory);
    } else {
      return res.status(404).send("Product category not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createProductCategory(req, res) {
  try {
    const productCategory = await ProductCategory.create({
      name: req.body.name,
    });
    return res
      .status(200)
      .json({
        message: "Product category created",
        productCategory: productCategory,
      });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateProductCategory(req, res) {
  try {
    const [productCategoryExist, productCategory] =
      await ProductCategory.update(req.body, {
        returning: true,
        where: {
          id: req.params.id,
        },
      });
    if (productCategoryExist !== 0) {
      return res
        .status(200)
        .json({
          message: "Product category updated",
          productCategory: productCategory,
        });
    } else {
      return res.status(404).send("Product category not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteProductCategory(req, res) {
  try {
    const productCategory = await ProductCategory.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (productCategory) {
      return res.status(200).json("Product category deleted");
    } else {
      return res.status(404).send("Product category not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllProductCategories,
  getOneProductCategory,
  createProductCategory,
  updateProductCategory,
  deleteProductCategory,
};
