const express = require('express');
const db = require('./Config/connection');
// const { Flower,Dab } = require('./Models');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/all', (req, res) => {
  
// })
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });


