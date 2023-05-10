/** @format */

const mysql = require('mysql');

require('dotenv').config();

const pool = mysql.createPool({
	port: process.env.DB_PORT,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	connectionLimit: 5,
	multipleStatements: true,
});

module.exports = pool;
