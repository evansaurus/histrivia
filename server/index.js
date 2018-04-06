const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');

let app = express();

app.use(express.static(__dirname, '../client/dist'))

.get('/', (req, res) => {
  res.send('Hello World');
})


.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));