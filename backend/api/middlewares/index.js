const jwt = require('jsonwebtoken');
const User = require('../models/user');

const checkAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send(401, "Token not found");
  }
  jwt.verify(
    req.headers.authorization,
    process.env.JWT_WEBTOKENSECRET,
    async (err, result) => {
      if (err) {
        return res.send(401,"Token not valid");
      }

      const user = await User.findOne({
        where: {
          email: result.email,
        },
      });

      if (!user) {
        return res.send(401,"User not found");
      }

      res.locals.user = user; //para poder acceder a esta información al ejecutar el método
      next();
    }
  );
};
const checkAdmin = (req, res, next) => {
  console.log(res.locals.user.role_id, res.locals.user.role_id !== 2);
  if(res.locals.user.role_id !== 1) {
    return res.send ('User not authorized')
  }
  next()
}

module.exports = {
    checkAuth,
    checkAdmin
}