const mysql = require('mysql2');
const config = require('../config');

const dbObject = {
    host: config.db.host,     // Change to your DB host
    user: config.db.user,          // Your MySQL username
    password: config.db.password,  // Your MySQL password
    database: config.db.database,      // Your database name
    connectionLimit: config.db.connectionLimit   // Number of max connections
}

const pool = mysql.createPool(dbObject);


// Test the connection on server startup
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("Connection established");
        connection.release(); // Release connection back to pool
    }
});

module.exports = pool.promise(); // Use promise-based queries
