const Post = require("../models/post");

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

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
};
