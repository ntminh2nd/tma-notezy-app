/** @format */

const pool = require('../config/database');

module.exports = {
	create: (data, callBack) => {
		pool.query(
			`insert into notes(title, content, userId) values (?, ?, ?)`,
			[data.title, data.content, data.userId],
			(error, results, fields) => {
				if (error) {
					return callBack(error);
				}
				return callBack(null, results);
			}
		);
	},
	getNotes: (callBack) => {
		pool.query(`select * from notes`, [], (error, results, fields) => {
			if (error) {
				callBack(error);
			}
			return callBack(null, results);
		});
	},
	getNoteById: (id, callBack) => {
		pool.query(
			`select * from notes where id = ?`,
			[id],
			(error, results, fields) => {
				if (error) {
					callBack(error);
				}
				return callBack(null, results[0]);
			}
		);
	},
	getNoteByTitleSearch: (userId, title, callBack) => {
		pool.query(
			`SELECT * FROM notes WHERE user_id = ? AND title LIKE ?`,
			[userId, `%${title}%`],
			(error, results, fields) => {
				if (error) {
					callBack(error);
				}
				return callBack(null, results);
			}
		);
	},
	updateNote: (id, data, callBack) => {
		pool.query(
			`update notes set title = ?, content = ? where id = ?`,
			[data.title, data.content, id],
			(error, results, fields) => {
				if (error) {
					callBack(error);
				}
				return callBack(null, results[0]);
			}
		);
	},
	// If the last note is deleted, when adding a new one, new id will be that deleted one's id
	deleteNote: (id, data, callBack) => {
		pool.query(
			`DELETE FROM notes WHERE id = ?`,
			[id],
			(error, results, fields) => {
				if (error) {
					callBack(error);
				}
				pool.query(
					`SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = '${pool.config.connectionConfig.database}' AND TABLE_NAME = 'notes'`,
					(error, results, fields) => {
						if (error) {
							callBack(error);
						}
						const newAutoIncrementValue = results[0].AUTO_INCREMENT - 1;
						pool.query(
							`ALTER TABLE notes AUTO_INCREMENT = ${newAutoIncrementValue}`,
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
