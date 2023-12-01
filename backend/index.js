const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const data = [
  { id: 1,  name: 'Apple' },
  { id: 2,  name: 'apple' },
  { id: 3,  name: 'apple' },
  { id: 4,  name: 'apple' },
  { id: 5,  name: 'apple' },
  { id: 6,  name: 'apple' },
  { id: 7,  name: 'apple' },
  { id: 8,  name: 'Pear' },
  { id: 9,  name: 'Peach' },
  { id: 10, name: 'Plum' },
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

const server = app.listen(8000, () => {
  console.log(`Backend microservice running on ${server.address().port}`);
});

module.exports = server
