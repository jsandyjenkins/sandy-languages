const express = require('express')
const path = require('path')
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000


const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

express()
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static("pages"))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
  })
  .get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  .post('/submit-shit', async (req, res) => {
    var words = req.body.words;
      const client = await pool.connect();
      const rowsnumber = await client.query('SELECT COUNT(*) FROM test_table');
      client.query("INSERT INTO test_table values (" + rowsnumber + ", '" + words + "')");
      res.sendFile('pages/index.html');
      client.end();
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))