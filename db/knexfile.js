// Update with your config settings.

require('dotenv').config({path: '../.env'});

module.exports = {
  production: {
    client: 'pg',
    connection: {    
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }
};
