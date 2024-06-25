const User = require("../models/user");
const bcrypt = require("bcrypt");


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
    const hash = bcrypt.genSaltSync(BCRYPT_ROUNDS);
    const hashedPassword = bcrypt.hashSync(req.body.password, hash);
    const user = await User.create({
      email: req.body.email,
      username: req.body.username,
      name: req.body.name,
      password: hashedPassword,
      birthday: req.body.birthday,
      gender: req.body.gender,
      card_number: req.body.card_number,
      phone: req.body.phone,
      address: req.body.address,
      role_id: req.body.role_id || 2, // Default role_id to 2 if not provided
    });
    console.log(req.body);

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

async function updateOwnProfile(req, res) {
  try {
    console.log(req.body)
    if (req.body.password !== undefined) {
      return res
        .status(404)
        .send("To update the password, use the specific request");
    }
    const [userExist, user] = await User.update(req.body, {
      returning: true,
      where: {
        id: res.locals.user.id,
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
  const updatePassword = async (req, res) => {
    const {currentPassword, newPassword, repeatPassword } = req.body;

    try {
      const currentUser = await User.findByPk(res.locals.user.id);

      const isPasswordValid = await bcrypt.compare(
        currentPassword,
        currentUser.password
      );
      if (!isPasswordValid) {
        return res.status(400).json({ error: "Wrong password" });
      }
      if (newPassword !== repeatPassword) {
        return res.status(400).json({ error: "Mismatching passwords" });
      }
      const saltRounds = bcrypt.genSaltSync(
        parseInt(process.env.BCRYPT_ROUNDS)
      );
      const hashedPassword = bcrypt.hashSync(newPassword, saltRounds);

      await currentUser.update({
        password: hashedPassword,
      });

      return res.status(200).json({ message: "Password updated" });
    } catch (error) {
      console.error("Error happened during password update", error);
      return res
        .status(500)
        .json({ error: "Error happened during password update" });
    }
  };

  const deleteOwnUser = async (req, res) =>{
    try {
    const user = await User.destroy({
      where: {
        id: res.locals.user.id,
      },
    });
    if (user) {
      return res.status(200).json("Own user deleted");
    } else {
      return res.status(404).send("Own user not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
  }
module.exports = {
  getAllUsers,
  getOneUser,
  getOwnProfile,
  createUser,
  updateUser,
  updateOwnProfile,
  updatePassword,
  deleteUser,
  deleteOwnUser
};
