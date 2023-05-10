/** @format */

const pool = require('../config/database');

module.exports = {
	create: (data, callBack) => {
		pool.getConnection((err, connection) => {
			if (err) throw err;
			connection.query(
				`INSERT INTO notes (title, content, user_id) VALUES (?, ?, ?)`,
				[data.title, data.content, data.user_id],
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

	getNotes: (callBack) => {
		pool.getConnection((err, connection) => {
			if (err) throw err;
			connection.query(`SELECT * FROM notes`, [], (error, results, fields) => {
				connection.release();
				if (error) {
					callBack(error);
				}
				return callBack(null, results);
			});
		});
	},

	getNotesByUser: (userId, callBack) => {
		pool.getConnection((err, connection) => {
			if (err) throw err;
			connection.query(
				`SELECT * FROM notes WHERE user_id = ?`,
				[userId],
				(error, results, fields) => {
					connection.release();
					if (error) {
						callBack(error);
					}
					return callBack(null, results);
				}
			);
		});
	},

	getNoteById: (id, callBack) => {
		pool.getConnection((err, connection) => {
			if (err) throw err;
			connection.query(
				`SELECT * FROM notes WHERE id = ?`,
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

	getNoteByTitleSearch: (data, callBack) => {
		pool.getConnection((err, connection) => {
			if (err) {
				return callBack(err);
			}
			connection.query(
				`SELECT * FROM notes WHERE user_id = ? AND title LIKE ?`,
				[data.user_id, `%${data.title}%`],
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

	updateNote: (id, data, callBack) => {
		pool.getConnection((err, connection) => {
			if (err) {
				return callBack(err);
			}
			connection.query(
				`update notes set title = ?, content = ? where id = ?`,
				[data.title, data.content, id],
				(error, results, fields) => {
					connection.release();
					if (error) {
						return callBack(error);
					}
					return callBack(null, results[0]);
				}
			);
		});
	},

	deleteNote: (id, data, callBack) => {
		pool.getConnection((err, connection) => {
			if (err) {
				return callBack(err);
			}
			connection.query(
				`DELETE FROM notes WHERE id = ?`,
				[id],
				(error, results, fields) => {
					if (error) {
						connection.release();
						return callBack(error);
					}
					connection.query(
						`SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = '${pool.config.connectionConfig.database}' AND TABLE_NAME = 'notes'`,
						(error, results, fields) => {
							if (error) {
								connection.release();
								return callBack(error);
							}
							const newAutoIncrementValue = results[0].AUTO_INCREMENT - 1;
							connection.query(
								`ALTER TABLE notes AUTO_INCREMENT = ${newAutoIncrementValue}`,
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
