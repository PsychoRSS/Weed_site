const express = require('express');
const db = require('./config/connection');
// const { Flower,Dab } = require('./Models');
const routes = require('./routes')
const PORT = process.env.PORT || 3001;
const { clog } = require('./middleware/clog');

const app = express();

app.use(clog);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });


