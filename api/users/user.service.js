const pool = require("../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into users(full_name, email, password) values (?, ?, ?)`,
      [data.full_name, data.email, data.password],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(`select * from users`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  getUserById: (id, callBack) => {
    pool.query(
      `select * from users where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByEmail: (email, callBack) => {
    pool.query(
      `select * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUser: (id, data, callBack) => {
    pool.query(
      `update users set full_name = ?, email = ?, password = ? where id = ?`,
      [data.full_name, data.email, data.password, id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  // If the last user is deleted, when adding a new one, new id will be that deleted one's id
  deleteUser: (id, data, callBack) => {
    pool.query(
      `DELETE FROM users WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        pool.query(
          `SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = '${pool.config.connectionConfig.database}' AND TABLE_NAME = 'users'`,
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            const newAutoIncrementValue = results[0].AUTO_INCREMENT - 1;
            pool.query(
              `ALTER TABLE users AUTO_INCREMENT = ${newAutoIncrementValue}`,
              (error, results, fields) => {
                if (error) {
                  callBack(error);
                }
                return callBack(null, results[0]);
              }
            );
          }
        );
      }
    );
  },
};
