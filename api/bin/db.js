const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'taplist-integration',
  password: 'postgres',
  port: 5432,
});

module.exports = pool;
