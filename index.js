const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');

app.use(cors);
app.get('/', function (req, res) {
    res.send('Hello World')
  })
app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))

require('../src/routes')(app);