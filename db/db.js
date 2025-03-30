const pool = require('../utils/pool');

module.exports = {
    showTables : async () => {
        return pool.query("show tables");
    }
};
