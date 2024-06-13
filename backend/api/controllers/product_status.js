const ProductStatus = require("../models/product_status");

async function getAllProductStatuses(req, res) {
  try {
    const productStatuses = await ProductStatus.findAll({ paranoid: false });
    if (productStatuses) {
      return res.status(200).json(productStatuses);
    } else {
      return res.status(404).send("No product statuses found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneProductStatus(req, res) {
  try {
    const productStatus = await ProductStatus.findByPk(req.params.id);
    if (productStatus) {
      return res.status(200).json(productStatus);
    } else {
      return res.status(404).send("Product status not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createProductStatus(req, res) {
  try {
    const productStatus = await ProductStatus.create({
      status: req.body.status,
    });
    return res.status(200).json({ message: "Product status created", productStatus: productStatus });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateProductStatus(req, res) {
  try {
    const [productStatusExist, productStatus] = await ProductStatus.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (productStatusExist !== 0) {
      return res.status(200).json({ message: "Product status updated", productStatus: productStatus });
    } else {
      return res.status(404).send("Product status not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteProductStatus(req, res) {
  try {
    const productStatus = await ProductStatus.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (productStatus) {
      return res.status(200).json("Product status deleted");
    } else {
      return res.status(404).send("Product status not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllProductStatuses,
  getOneProductStatus,
  createProductStatus,
  updateProductStatus,
  deleteProductStatus,
};
