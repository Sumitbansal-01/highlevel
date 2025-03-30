const dotenv = require('dotenv');
dotenv.config();
const config = require('../config');

const configMapper = () => {
    config.port = process.env.PORT;
    config.db.user = process.env.DB_USER;
    config.db.password = process.env.DB_PASSWORD;
    config.db.host = process.env.DB_HOST;
}

module.exports = configMapper
