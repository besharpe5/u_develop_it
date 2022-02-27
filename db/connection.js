const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: '$03uOFo#3zVi0^Et72',
    database: 'election'
  });

  module.exports = db;