const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: 'password', // Replace with your MySQL password
  database: 'bookstore', // Ensure this database exists
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1); // Exit the process if the connection fails
  }
  console.log('MySQL Connected...');
});

// Routes
app.get('/api/books', (req, res) => {
  const sql = 'SELECT * FROM books';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching books:', err);
      return res.status(500).send('Error fetching books');
    }
    res.send(result);
  });
});

app.post('/api/books', (req, res) => {
  const { title, author, price, description } = req.body;
  if (!title || !author || !price || !description) {
    return res.status(400).send('Missing required fields');
  }

  const sql = 'INSERT INTO books (title, author, price, description) VALUES (?, ?, ?, ?)';
  db.query(sql, [title, author, price, description], (err, result) => {
    if (err) {
      console.error('Error adding book:', err);
      return res.status(500).send('Error adding book');
    }
    res.send('Book added...');
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Something went wrong!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});