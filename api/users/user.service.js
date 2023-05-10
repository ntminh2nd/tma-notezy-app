/** @format */

const pool = require('../config/database');

module.exports = {
	createUser: (data, callBack) => {
		pool.getConnection((error, connection) => {
			if (error) {
				return callBack(error);
			}

			connection.query(
				`INSERT INTO users(full_name, email, password) VALUES (?, ?, ?)`,
				[data.full_name, data.email, data.password],
				(error, results, fields) => {
					connection.release();
					if (error) {
						return callBack(error);
					}
					return callBack(null, results);
				}
			);
		});
	},

	getUsers: (callBack) => {
		pool.getConnection((error, connection) => {
			if (error) {
				return callBack(error);
			}

			connection.query(`SELECT * FROM users`, [], (error, results, fields) => {
				connection.release();
				if (error) {
					callBack(error);
				}
				return callBack(null, results);
			});
		});
	},

	getUserById: (id, callBack) => {
		pool.getConnection((error, connection) => {
			if (error) {
				return callBack(error);
			}

			connection.query(
				`SELECT * FROM users WHERE id = ?`,
				[id],
				(error, results, fields) => {
					connection.release();
					if (error) {
						callBack(error);
					}
					return callBack(null, results[0]);
				}
			);
		});
	},

	getUserByEmail: (email, callBack) => {
		pool.getConnection((error, connection) => {
			if (error) {
				return callBack(error);
			}

			connection.query(
				`SELECT * FROM users WHERE email = ?`,
				[email],
				(error, results, fields) => {
					connection.release();
					if (error) {
						callBack(error);
					}
					return callBack(null, results[0]);
				}
			);
		});
	},

	updateUser: (id, data, callBack) => {
		pool.getConnection((error, connection) => {
			if (error) {
				return callBack(error);
			}

			connection.query(
				`UPDATE users SET full_name = ?, email = ?, password = ? WHERE id = ?`,
				[data.full_name, data.email, data.password, id],
				(error, results, fields) => {
					connection.release();
					if (error) {
						callBack(error);
					}
					return callBack(null, results[0]);
				}
			);
		});
	},

	deleteUser: (id, data, callBack) => {
		pool.getConnection((error, connection) => {
			if (error) {
				return callBack(error);
			}

			connection.query(
				`DELETE FROM users WHERE id = ?`,
				[id],
				(error, results, fields) => {
					if (error) {
						connection.rollback(() => {
							connection.release();
							return callBack(error);
						});
					}
					connection.query(
						`SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = '${pool.config.connectionConfig.database}' AND TABLE_NAME = 'users'`,
						(error, results, fields) => {
							if (error) {
								connection.rollback(() => {
									connection.release();
									return callBack(error);
								});
							}

							const newAutoIncrementValue = results[0].AUTO_INCREMENT - 1;
							connection.query(
								`ALTER TABLE users AUTO_INCREMENT = ${newAutoIncrementValue}`,
								(error, results, fields) => {
									connection.release();
									if (error) {
										return callBack(error);
									}
									return callBack(null, results[0]);
								}
							);
						}
					);
				}
			);
		});
	},
};
