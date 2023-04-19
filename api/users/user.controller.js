const {
  create,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByEmail,
} = require("./user.service");

require("dotenv").config();

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Không thể kết nối với database.",
        });
      }
      return res.status(200).json({
        success: 1,
        message: results,
      });
    });
  },
  getUserById: (req, res) => {
    const id = req.params.id;
    getUserById(id, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Không tìm thấy người dùng.",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getUsers: (req, res) => {
    getUsers((error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateUser: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUser(id, body, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        message: "Cập nhật dữ liệu người dùng thành công.",
      });
    });
  },
  deleteUser: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    deleteUser(id, body, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        message: "Xóa người dùng thành công.",
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    getUserByEmail(body.email, (error, results) => {
      if (error) {
        console.log(error);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Email hoặc mật khẩu không chính xác.",
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        result.password = undefined;
        const jsonToken = sign({ result: results }, process.env.TOKEN_KEY, {
          expiresIn: "1h",
        });
        return res.json({
          success: 1,
          message: "Đăng nhập thành công.",
          token: jsonToken,
        });
      } else {
        return res.json({
          success: 0,
          message: "Email hoặc mật khẩu không chính xác.",
        });
      }
    });
  },
};
