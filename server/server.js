const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors('*'));

app.use('/', (req, res) => res.send('testing'));

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
