const { verify } = require("jsonwebtoken");

require("dotenv").config();

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      verify(token, process.env.TOKEN_KEY, (error, decoded) => {
        if (error) {
          res.json({
            success: 0,
            message: "Invalid token.",
          });
        } else {
          next();
        }
      });
    } else {
      res.json({
        success: 0,
        message: "Access denied. User unautorized.",
      });
    }
  },
};
