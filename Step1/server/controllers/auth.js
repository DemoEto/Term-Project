
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'term_project_db',
  password: '',
  port: 3306,
});

const app = express();
app.use(bodyParser.json());

//ทดลองการเชื่อม database 
// const database = pool.query("SELECT * FROM users");
// console.log(database);

const login = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password]);
    
    if (result.rows.length > 0) {
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(401).send({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'An error occurred' });
  }

};


module.exports = {
  login,
};
