const pgp = require('pg-promise')();

// const db = pgp ({
//   host: 'localhost',
//   port: 5432,
//   database: 'splitzi'
// });

const connection = process.env.DATABASE_URL;

const db = pgp(connection);

module.exports = db;
