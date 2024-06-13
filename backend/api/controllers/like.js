const Like = require("../models/like");

async function getAllLikes(req, res) {
  try {
    const likes = await Like.findAll({ paranoid: false });
    if (likes) {
      return res.status(200).json(likes);
    } else {
      return res.status(404).send("No likes found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneLike(req, res) {
  try {
    const like = await Like.findByPk(req.params.id);
    if (like) {
      return res.status(200).json(like);
    } else {
      return res.status(404).send("Like not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createLike(req, res) {
  try {
    const like = await Like.create({
      product_id: req.body.product_id,
      user_id: req.body.user_id,
    });
    return res.status(200).json({ message: "Like created", like: like });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateLike(req, res) {
  try {
    const [likeExist, like] = await Like.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (likeExist !== 0) {
      return res.status(200).json({ message: "Like updated", like: like });
    } else {
      return res.status(404).send("Like not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteLike(req, res) {
  try {
    const like = await Like.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (like) {
      return res.status(200).json("Like deleted");
    } else {
      return res.status(404).send("Like not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllLikes,
  getOneLike,
  createLike,
  updateLike,
  deleteLike,
};
