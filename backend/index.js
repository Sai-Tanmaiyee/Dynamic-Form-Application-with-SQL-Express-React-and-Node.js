const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'formData'
});

db.connect(err => {
    if(err) {
        throw err;
    }
    console.log('MYSQL connected...');
});

app.post('/api/form', (req, res) => {
    const { formType, name, countryCode, phoneNumber } = req.body;
    const query = 'INSERT INTO forms (formType, name, countryCode, phoneNumber) VALUES (?, ?, ?, ?)';
    db.query(query, [formType, name, countryCode, phoneNumber], (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send('Form data saved!');
      }
    });
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  app.get('/api/forms', (req, res) => {
    const query = 'SELECT * FROM forms';
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    });
  });
  
