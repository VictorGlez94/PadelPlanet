const Post = require("../models/post");
const Product = require("../models/product");

async function getAllPosts(req, res) {
  try {
    const posts = await Post.findAll({ paranoid: false });
    if (posts) {
      return res.status(200).json(posts);
    } else {
      return res.status(404).send("No posts found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOnePost(req, res) {
  try {
    const post = await Post.findByPk(req.params.id);
    if (post) {
      return res.status(200).json(post);
    } else {
      return res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createPost(req, res) {
  try {
    const post = await Post.create({
      buyer_id: req.body.buyer_id,
      sell_status: req.body.sell_status,
      product_id: req.body.product_id,
    });
    return res.status(200).json({ message: "Post created", post: post });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updatePost(req, res) {
  try {
    const [postExist, post] = await Post.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (postExist !== 0) {
      return res.status(200).json({ message: "Post updated", post: post });
    } else {
      return res.status(404).send("Post not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deletePost(req, res) {
  try {
    const post = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (post) {
      return res.status(200).json("Post deleted");
    } else {
      return res.status(404).send("Post not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function createPostWithProduct(req, res) {
  try {
    const user = res.locals.user;

    // Verificar que user y las propiedades de req.body existan
    if (
      !user ||
      !req.body.name ||
      !req.body.brand ||
      !req.body.category_id ||
      !req.body.price ||
      !req.body.product_status_id ||
      !req.body.image_url
    ) {
      return res.status(400).send("Missing required fields");
    }

    // Create the Product
    const newProduct = await Product.create({
      seller_id: user.id,
      name: req.body.name,
      brand: req.body.brand,
      category_id: req.body.category_id,
      description: req.body.description,
      price: req.body.price,
      product_status_id: req.body.product_status_id,
      image_url: req.body.image_url,
    });

    // Create the Post using the product_id from the newly created Product
    const newPost = await Post.create({
      product_id: newProduct.id, 
      sell_status: "Disponible"
    });
    // const post = await Post.createProduct({
    //   seller_id: user.id,
    //   name: req.body.name,
    //   brand: req.body.brand,
    //   category_id: req.body.category_id,
    //   price: req.body.price,
    //   product_status_id: req.body.product_status_id,
    //   image_url: req.body.image_url,
    // });
    // console.log(post)

    if (newPost) {
      return res.status(200).json("Post created with product");
    } else {
      return res.status(404).send("Post not created");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
  createPostWithProduct
};
