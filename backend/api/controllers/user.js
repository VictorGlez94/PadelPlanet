const User = require("../models/user");

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll({ paranoid: false });
    if (users) {
      return res.status(200).json(users);
    } else {
      return res.status(404).send("No users found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create({
      firstName: req.body.firstName,
    });
    return res.status(200).json({ message: "User created", user: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateUser(req, res) {
  try {
    const [userExist, user] = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (userExist !== 0) {
      return res.status(200).json({ message: "User updated", user: user });
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      return res.status(200).json("User deleted");
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getOwnProfile = async (req, res) => {
  try{
    const user = await User.findByPk(res.locals.user.id);

    if(!user){
      return res.send('User not found')
    }
    res.json({
      message : "Profile fetched",
      result: user
    })

  }catch(error){
    res.json(error);
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  getOwnProfile,
};
