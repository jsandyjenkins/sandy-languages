const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});


function addEntry() {

    const client = await pool.connect();

    var rowsnumber = pool.query(
        "SELECT COUNT(*) FROM test_table",
        (err, res) => {
        console.log(err, res);
        pool.end();
        }
    );

    pool.query(
        "INSERT INTO test_table values (" + rowsnumber + ", 'dummy')",
        (err, res) => {
        console.log(err, res);
        pool.end();
        }
    );

    client.release();

};
