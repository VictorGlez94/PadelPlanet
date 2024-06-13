

const User = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const login = async (req, res) => {
    try{
        console.log("aqui")
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if(!user){
            res.json({
                message: "user nor found",
                result: {}
            })
        };

        const payload = {
            email: user.email
        };
        const token = jwt.sign(payload, process.env.JWT_WEBTOKENSECRET, {
            expiresIn:'2h'
        });
        res.json({
            message: "Login succesful",
            result: {
                token,
            },
        });
    }
    catch(error){
        res.json(error)
    }
}

const signup = async (req, res) => {
  try {
    const hash = bcrypt.genSaltSync(10)
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
      //   where: {
      //     email: req.body.email,
      //     username: req.body.username,
      //     name: req.body.name,
      //   },
    });

    const payload = {
      email: user.email,
    };
    const token = jwt.sign(payload, process.env.JWT_WEBTOKENSECRET);
    res.json({
      message: "Signup succesful",
      result: {
        token,
      },
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {login, signup};