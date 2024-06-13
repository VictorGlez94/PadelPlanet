const Role = require("../models/role");

async function getAllRoles(req, res) {
  try {
    const roles = await Role.findAll({ paranoid: false });
    if (roles) {
      return res.status(200).json(roles);
    } else {
      return res.status(404).send("No roles found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneRole(req, res) {
  try {
    const role = await Role.findByPk(req.params.id);
    if (role) {
      return res.status(200).json(role);
    } else {
      return res.status(404).send("Role not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createRole(req, res) {
  try {
    const role = await Role.create({
      role: req.body.role,
    });
    return res.status(200).json({ message: "Role created", role: role });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateRole(req, res) {
  try {
    const [roleExist, role] = await Role.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (roleExist !== 0) {
      return res.status(200).json({ message: "Role updated", role: role });
    } else {
      return res.status(404).send("Role not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteRole(req, res) {
  try {
    const role = await Role.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (role) {
      return res.status(200).json("Role deleted");
    } else {
      return res.status(404).send("Role not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllRoles,
  getOneRole,
  createRole,
  updateRole,
  deleteRole,
};
