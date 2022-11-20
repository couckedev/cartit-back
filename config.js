require('dotenv').config({path: './.env'});
const config = {
    app: {
        port: process.env.APP_PORT
    }
};
module.exports = config;

