const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 4001;

app.use(cors());
app.use(express.json());

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  db.run(
    'INSERT INTO users (username, password) VALUES (?, ?)',
    [username, password],
    function (err) {
      if (err) {
        return res.status(400).json({ error: 'Username already taken or DB error' });
      }
      res.status(201).json({ id: this.lastID, username });
    }
  );
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  db.get(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      if (row) {
        res.status(200).json({ message: 'Login successful', user: row });
      } else {
        res.status(401).json({ error: 'Invalid username or password' });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});